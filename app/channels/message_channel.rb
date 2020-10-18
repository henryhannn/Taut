class MessageChannel < ApplicationCable::Channel
  def subscribed 
      stream_for 'message_channel'
  end 
end