class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
        render :index
    end
  
    def show
        @channel = Channel.find_by(id: params[:id])
        if @channel
            render :show
        else
            render json: ['Channel not found'], status: 404
        end
    end
    
    def create
        @channel = Channel.create!(channel_params)
        @membership = Membership.new(user_id: current_user.id, channel_id: @channel.id)
    
        if @channel.save && membership.save
            render :show
        else
            render json: @channel.errors.full_messages + @membership.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @channel = Channel.find(params[:id])

        if @channel
            @channel.destroy
            @channel = Channel.all.first
            render :show
        else
            render json: @channel.errors.full_messages, status: 420
        end
    end

    private
  
    def channel_params
        params.require(:channel).permit(:name, :channel_type)
    end
end