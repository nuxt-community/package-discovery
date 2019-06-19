jest.setTimeout(60000)

const { Nuxt } = require('nuxt-edge')

const config = require('../example/nuxt.config')
config.dev = false

let nuxt

describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await nuxt.ready()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('contain package discovered ', () => {
    const name = Object.keys(nuxt.moduleContainer.requiredModules)

    expect(name).toContain('@nuxtjs/eslint-module')
  })
})
