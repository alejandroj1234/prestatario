class ProfilesController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery prepend: true

  def index
    if params[:user_id].present?
      @profile = User.where(id: params[:user_id]).first
    else
      @profile = User.where(id: current_user.id).first
    end


    if @profile.nil?
      User.create!(user_id: current_user.id)
    end

    respond_to do |format|
      format.html { render :index }
      format.json {
        render json: { profile: @profile }
      }
    end
  end
end