# [Mxssages](https://mxssages.com/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/OnceDot/Mxssages/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

> Light and flat design conversation viewer and recorder for your favorite chat apps.


### What it does

This utility allows you to record and view your Discord, Snapchat, Instagram, Twitter, Facebook messages.


### Screenshot

[![Screenshot #1](https://media.discordapp.net/attachments/350094898290229258/572695854948024320/unknown.png?width=774&height=511)


### Features

> **Notice**: You can use [Distools](https://github.com/OnceDot/Distools) to record your Discord messages.

- [ ] Record Discord messages
- [ ] Record Snapchat messages
- [ ] Record Instagram messages
- [ ] Record Twitter messages
- [ ] Record Facebook messages
- [ ] Cloud saving
- [ ] Signature
- [ ] Themes


### Conversation structure

All conversations are `json` files and should respect this example.  
**members** is a list who contains the recipients and you as the last member.  
**messages** is a list who contains the conversation.

```JSON
{
  "members": [
    {
      "id": "0",
      "username": "John"
    },
    { 
      "id": "1",
      "username": "Me"
    }
  ],
  "messages": [
    {
      "id": "0",
      "author": "0",
      "content": "Hello"
    },
    {
      "id": "1",
      "author": "1",
      "content": "Hi John, how are you?"
    },
    {
      "id": "2",
      "author": "0",
      "content": "I'm fine and you?"
    },
  ]
 }
```
