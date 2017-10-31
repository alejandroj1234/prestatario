class ProfilesController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index
    @@current_user_id = current_user.id
    if params[:user_id].present?
      @profile = Profile.where(user_id: params[:user_id]).first
    else
      @profile = Profile.where(user_id: @@current_user_id).first
    end


    if @profile.nil?
      Profile.create!(user_id: @@current_user_id)
    end

    respond_to do |format|
      format.html { render :index }
      format.json {
        render json: { profile: @profile }
      }
    end
  end

  def update
    @profile = Profile.where(user_id: @@current_user_id).first
    @profile.update(
        user_name: params[:"user-name"],
        first_name: params[:"first-name"],
        last_name: params[:"last-name"],
        street: params[:"street"],
        apartment_number: params[:"apartment-number"],
        city: params[:"city"],
        state: params[:"state"],
        zip_code: params[:"zip-code"],
        phone: params[:"phone"],
        user_id: @@current_user_id
    )

    respond_to do |format|
      format.html { render :index }
      format.json { head :no_content  }
    end
  end
end