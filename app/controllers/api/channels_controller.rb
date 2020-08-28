class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
        render json: @channels
    end
  
    def show
        @channel = Channel.find_by(id: params[:id])
        render json: @channel
    end
    
    def create
        @channel = Channel.new(channel_params)
    
        if @channel.save
            render "api/channels/show"
        else
            render @channel.errors.full_messages, status: 422
        end
    end
  
    private
  
    def channel_params
        params.require(:channel).permit(:name, :channel_type)
    end
end