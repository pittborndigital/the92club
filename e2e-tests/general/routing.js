module.exports = {
  'Homepage loads': (client) => {
    client
      .url(client.launch_url)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#root', 1000)
      .assert.containsText('#root', 'My Progress')
      .end()
  },
  'Catch bad routes with 404 page': (client) => {
    client
      .url(`${client.launch_url}/${(Math.random() * 1000).toString()}`)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#root', 1000)
      .assert.containsText('#root', 'Page not found')
      .end()
  },
}
