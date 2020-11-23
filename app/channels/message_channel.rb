class MessageChannel < ApplicationCable::Channel
  def subscribed 
    stream_for 'message_channel'
  end

  def speak(data)
    message = Message.create(
      body: data['message'],
      author_id: data['author_id'],
      channel_id: data['channel_id']
    )

    socket = {
      id: message.id,
      body: message.body,
      author_id: message.author_id,
      channel_id: message.channel_id,
      author: message.author.full_name
    }

    MessageChannel.broadcast_to('message_channel', socket)
  end

  def unsubscribed; end
end