class Api::MembershipsController < ApplicationController
  def index
    if params[:channel_id]
      @memberships = Membership.where(channel_id: params[:channel_id]).includes(:user)
    end

    if @memberships
      render :index
    else
      render json: @messages.errors.full_messages, status: 420
    end
  end

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private
  
  def membership_params
    params.require(:membership).permit(:user_id, :channel_id)
  end
end