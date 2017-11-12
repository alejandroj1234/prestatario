class LentToolsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery prepend: true

  def index
    @lentTools = Tool.where("user_id = ? AND tool_status = ?", current_user.id, 'Lent')
    respond_to do |format|
      format.html { render :index }
      format.json {
        render json: { lentTools: @lentTools }
      }
    end
  end

  def update
    @tool = Tool.find(params[:id])
    @tool.update(
        tool_status: 'available'
    )
    @borrowed_tool = BorrowedTool.where(tool_id: params[:id])
    @borrowed_tool.first.destroy

    respond_to do |format|
      format.html { render :index }
      format.json { head :no_content  }
    end
  end
end