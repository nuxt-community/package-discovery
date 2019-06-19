const pkgDiscovery = require('pkg-discovery')
const getProp = require('dotprop')

module.exports = async function (moduleOptions) {
  const options = {
    dir: this.options.srcDir,
    ...this.options['package-discovery'],
    ...this.options.packageDiscovery,
    ...moduleOptions
  }

  // devModules
  const devDependencies = await getDeps({ ...options, dev: true })
  devDependencies.forEach(name => this.requireModule(name))

  // modules
  const dependencies = await getDeps({ ...options, dev: false })
  dependencies.forEach(name => this.requireModule(name))
}

async function getDeps(options) {
  const deps = await pkgDiscovery(options)
  const prefix = options.dev ? 'devDependencies' : 'dependencies'
  const result = []

  for (const [name, pkg] of Object.entries(deps)) {
    if (getProp(pkg, 'nuxt') || getProp(pkg, `${prefix}.nuxt`) || getProp(pkg, `${prefix}.nuxt-edge`)) {
      result.push(name)
    }
  }

  return result
}

module.exports.meta = require('../package.json')
