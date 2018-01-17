const { Command } = require('discord.js-commando')

const IOTools = require('../../util/IOTools')
const ioTools = new IOTools()

module.exports = class Love extends Command {
  constructor (client) {
    super(client, {
      name: 'love',
      group: 'actions',
      memberName: 'love',
      guildOnly: true,
      throttling: { usages: 1, duration: 10 },
      description: 'Returns a random love gif and if a user is mentioned, includes their name.',
      examples: ['+love @Alcha#2621']
    })
  }

  async run (msg, args) {
    let content = ''

    if (msg.mentions.users.size > 0) {
      const username = msg.mentions.users.first().username
      content = `**${username}**, you've been loved by **${msg.author.username}**. :heart:`
    }

    ioTools.getRandomImage('love').then(image => {
      msg.channel.send(content, {
        files: [
          image
        ]
      })
    })
  }
}