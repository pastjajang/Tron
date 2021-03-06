const Command = require('../BaseCmd')

const IOTools = require('../../util/IOTools')
const ioTools = new IOTools()

module.exports = class Love extends Command {
  constructor (client) {
    super(client, {
      name: 'love',
      group: 'actions',
      memberName: 'love',
      guildOnly: true,
      description: 'Returns a random love gif and if a user is mentioned, includes their name.',
      examples: ['+love @Alcha#0042'],
      argsType: 'multiple'
    })
  }

  async run (msg, args) {
    if (msg.mentions.users.size > 0) {
      var content = `${this.getMentionedUsernames(msg)}, you've been loved by **${msg.author.username}**. :heart:`
    }

    let image = await ioTools.getRandomImage('love', args)
    return Command.sendMessage(msg.channel, content, this.client.user, { files: [image] })
  }
}
