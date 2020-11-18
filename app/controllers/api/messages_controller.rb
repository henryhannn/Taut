class Api::MessagesController < ApplicationController
  def index
    if params[:channel_id]
      @messages = Message.where(channel_id: params[:channel_id]).includes(:user)
    end

    if @messages
      render :index
    else
      render json: @messages.errors.full_messages, status: 420
    end
  end

  def create
    @message = Messasge.new(message_params)
    if @message.save
      render :show
      message_data = {
        id: @message.id,
        body: @message.body,
        author_id: @message.author_id,
        channel_id: @message.channel_id,
        created_at: @message.created_at,
        updated_at: @message.updated_at
      }
      MessageChannel.broadcast_to('message_channel', message_data)
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end
end