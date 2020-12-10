class Api::MessagesController < ApplicationController
  def index
    @messages = Channel.find_by(id: params[:channel_id]).messages
    render "api/messages/index"
  end

  # def create
  #   @message = Message.new(message_params)
  #   if @message.save
  #     render :show
  #     message_data = {
  #       id: @message.id,
  #       body: @message.body,
  #       author_id: @message.author_id,
  #       channel_id: @message.channel_id,
  #       created_at: @message.created_at,
  #       updated_at: @message.updated_at
  #     }
  #     MessageChannel.broadcast_to('message_channel', message_data)
  #   else
  #     render json: @message.errors.full_messages, status: 422
  #   end
  # end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end
end