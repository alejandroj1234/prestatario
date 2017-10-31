class SearchController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index
    @@current_user_id = current_user.id

    def mk
      @base_url = "/search/mk"
      render :index
    end

    if params[:keywords].present?
      @keywords = params[:keywords]

      tool_search_terms = ToolSearchTerms.new(@keywords)
      @tools = Tool.where(
        tool_search_terms.where_clause,
        tool_search_terms.where_args).
        order(tool_search_terms.order)
    else
      @tools = []
    end

    respond_to do |format|
      format.html {
        redirect_to search_mk_path
      }
      format.json {
        render json: { tools: @tools }
      }
    end

  end
end

