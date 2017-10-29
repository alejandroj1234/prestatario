class ToolsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index
    @@current_user_id = current_user.id
    def ng
      @base_url = "/tools/ng"
      render :index
    end

    if params[:id].present?
      @tool = Tool.find(params[:id])
      respond_to do |format|
        format.json {
          render json: { tool: @tool}
        }
      end
    else

      @tools = Tool.where(user_id: @@current_user_id)
      respond_to do |format|
        format.html {
          redirect_to tools_ng_path
        }
        format.json {
          render json: { tools: @tools }
        }
      end
    end

    def create
      Tool.create!(
        tool_name: params[:"tool-name"],
        tool_make: params[:"tool-make"],
        tool_model: params[:"tool-model"],
        user_id: @@current_user_id
      )

      respond_to do |format|
        format.html { render :index }
        format.json { head :no_content  }
      end
    end

    def update
      @tool = Tool.find(params[:id])
      @tool.update(
          tool_name: params[:"tool-name"],
          tool_make: params[:"tool-make"],
          tool_model: params[:"tool-model"],
          user_id: @@current_user_id
      )

      respond_to do |format|
        format.html { render :index }
        format.json { head :no_content  }
      end
    end

    def destroy
      @tool = Tool.find(params[:id])
      @tool.destroy

      respond_to do |format|
          format.html { render :index }
          format.json { head :no_content  }
      end
    end
  end
end