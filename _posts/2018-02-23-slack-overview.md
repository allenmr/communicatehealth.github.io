---
layout: post
title:  "Slack Overview"
date: 2018-02-23 12:00:00
categories: howto
---

If you haven't already downloaded the app: [Download Slack](https://slack.com/downloads/osx)

Create an account and sign in to the CommunicateHealth.slack.com workspace

## Direct Message vs Channel vs Thread

### Direct Message (DM)

You can message anyone directly through a direct message (no different from Hipchat, Gchat, AIM, Jabber, IRC, ...).

* Click on the **Direct Messages** heading in the sidebar (or use `⌘ + K` or `⌘ + T`)
* Type to search for the person you want to Message
* Or if you've already messaged them just select their name in the sidebar

You can also create a group direct message (Group DM) for you and up to 8 other people. This is good to connect with a group quickly when a channel isn't necessary.

* Same as Direct Messages, just type more than one name

Group DMs can be converted to Private Channels if they turn into long-term discussions

* click the gear icon in the top right.
* select Convert to private channel.

### Channels

Group conversations (like Hipchat rooms)

More info on Slack about [Private/Public Channels](https://get.slack.help/hc/en-us/articles/115004071768#channels)

### Threads

For when you want to reply to someone's message directly in a channel but the conversation is off topic or not relevant to the larger team.

More info on Slack about [Threads](https://get.slack.help/hc/en-us/articles/115000769927-Message-threads)

## Channel naming convention

Since Slack organizes everything alphabetically it can be difficult to keep your #channels organized. To help with this, we're recommending a naming convention to keep like #channels grouped together

* Teams: #team-
  * team-design
  * team-dev
  * team-writers
* Projects: #proj-
  * #proj-hp2030
  * #proj-onc

We had a lot of overlapping rooms on Hipchat, lets try to avoid that by using project channels and Group DMs

## Muting notifications while in a meeting

Who wants to hear constant beeps while in a meeting?

**To disable your notifications temporarily:**

* Click the &#128276; **bell icon** by your workspace name.
* Choose to snooze notifications for 20 minutes, or 1, 2, 4, 8 or 24 hours. When snooze is turned on, the  &#128276; **bell icon** changes to the snooze icon.

**To turn off or adjust snooze:**

* Click the &#128276; **bell icon**, then select **Turn OFF**. To change your current snooze settings, just open the &#128276; **bell icon** menu and select **Adjust time**.

## Message Formatting

You can just type in the message box, but if you want any basic formatting you can add the following:

* `*asterisks*` for **bold text**
* `_undescores_` for *italic*
* `~tildes~` for ~~strikethrough~~
* **Lists:** `Shift + Enter` for a new line then add a number or a bullet (`Option + 8` will add a bullet symbol)
* `>` to blockquote one paragraph
* `>>>` to blockquote multiple paragraphs
* :emoji-name: for emojis (i.e - :grinning:)

## Custom emojis

You can add custom emoji here: [https://communicatehealth.slack.com/admin/emoji](https://communicatehealth.slack.com/admin/emoji)

Square images work best. Image can't be larger than 128px in width or height, and must be smaller than 64KB in file size.

## Keyboard shortcuts

[Full list on Slack](https://get.slack.help/hc/en-us/articles/201374536-Slack-keyboard-shortcuts)

`⌘ + /` to open this list in the Slack App

## Pro Tips

* Quick edit message with the Up arrow
* Mute channels that you don't want constant notifications on
* set a reminder using slackbot `/remind [me / @someone / #channel][what][when]`
* Star important messages
* `/msg` to send a direct message from wherever you are (in a channel, another direct message, etc)
* `command` + `,` to edit your notification preferences

## Theme your sidebar

You can customize the sidebar appearance however by

* Click your workspace name on the top left
* Select **Preferences**
* Select **Sidebar**
* Expand **Customize your theme and share it with others**

Here's a nice clean, black one that I've been using:
`#2A2A2A,#2A2A2A,#454647,#FFFFFF,#454647,#FFFFFF,#3DBA0F,#EF4933`

And here's a CH themed on that Adam put together:
`#23232D,#373741,#DB0D5F,#FFFFFF,#454647,#FFFFFF,#8EDE00,#839BA3`

Or you can browse this massive list to select your own: [http://slackthemes.net/](http://slackthemes.net/)

## Apps

There are a ton of app integrations available for Slack. We only get 10 at the free tier and we already have 7 in place, but feel free to check out the full list if there are any apps that you're interested in: [https://communicatehealth.slack.com/apps](https://communicatehealth.slack.com/apps)

### Giphy
`/giphy`

### Simple Poll
`/poll "question" "answer 1" "Answer 2" [optional anonymous]` - Can include up to 10 answer options

### Lunch Train
`/lunchtrain [optional place or food genre] [at optional time]` - sends direct messages to everyone in the channel or group DM to invite to lunch (instead of spamming an entire channel)

### Box
Box share links will be displayed in a nicer format and with additional options from Box (download, etc)

Click the `+` next to the message field to add a file from Box (opens bax navigator window)
