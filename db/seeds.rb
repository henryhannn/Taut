# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Message.delete_all
Channel.delete_all
Membership.delete_all

demouser = User.create(email: 'DemoUser@Demo.com', full_name: 'Demo', password: 'demouser')
user1 = User.create(email: 'henry@henry.com', full_name: 'Henry Han', password: 'henryhan')

channel1 = Channel.create(name: 'general', channel_type: 'group', owner_id: demouser.id)
channel2 = Channel.create(name: 'announcements', channel_type: 'group', owner_id: demouser.id)
channel3 = Channel.create(name: 'brainstorming', channel_type: 'group', owner_id: demouser.id)
channel4 = Channel.create(name: 'media', channel_type: 'group', owner_id: demouser.id)
channel5 = Channel.create(name: 'event-planning', channel_type: 'group', owner_id: demouser.id)
channel6 = Channel.create(name: 'frontend-team', channel_type: 'group', owner_id: demouser.id)
channel7 = Channel.create(name: 'backend-team', channel_type: 'group', owner_id: demouser.id)
channel8 = Channel.create(name: 'design-team', channel_type: 'group', owner_id: demouser.id)
channel9 = Channel.create(name: 'meme-team', channel_type: 'group', owner_id: demouser.id)
channel10 = Channel.create(name: 'red-velvet-team', channel_type: 'group', owner_id: demouser.id)
channel11 = Channel.create(name: 'running-out-of-channel-name-ideas1', channel_type: 'group', owner_id: demouser.id)
channel12 = Channel.create(name: 'running-out-of-channel-name-ideas2', channel_type: 'group', owner_id: demouser.id)

membership1 = Membership.create(user_id: demouser.id, channel_id: channel1.id)
membership2 = Membership.create(user_id: user1.id, channel_id: channel1.id)

message1 = Message.create(body: 'hello world!', author_id: demouser.id, channel_id: channel1.id)
message2 = Message.create(body: 'is this working?', author_id: demouser.id, channel_id: channel1.id)
message3 = Message.create(body: 'hi!', author_id: user1.id, channel_id: channel1.id)
message4 = Message.create(body: 'hellooooo!', author_id: demouser.id, channel_id: channel1.id)