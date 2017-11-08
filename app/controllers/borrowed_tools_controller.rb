class BorrowedToolsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index
    @borrowedTools = BorrowedTool.includes(:tool).where("user_id = ?", current_user.id)

    respond_to do |format|
      format.html { render :index }
      format.json {
        render json: {
            borrowedTools: @borrowedTools.as_json(include: [:tool])
        }
      }
    end
  end
end
