class SearchController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery prepend: true

  def mk
    @base_url = "/search/mk"
    render :index
  end

  def index
    if params[:keywords].present?
      @keywords = params[:keywords]

      tool_search_terms = ToolSearchTerms.new(@keywords)
      @tools = Tool.where(
        tool_search_terms.where_clause,
        tool_search_terms.where_args).
        order(tool_search_terms.order)
      @tools = @tools.includes(:user)
    else
      @tools = []
    end

    respond_to do |format|
      format.html {
        redirect_to search_mk_path
      }
      format.json {
        render json: {
            tools: @tools.as_json(include: [:user])
        }
      }
    end
  end
end

