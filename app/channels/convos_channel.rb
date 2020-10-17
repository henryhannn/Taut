class ConvosChannel < ApplicationCable::Channel
  def subscribed 
      stream_for 'convos_channel'
  end 
end