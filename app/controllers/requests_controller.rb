class RequestsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def rq
    @base_url = "/requests/rq"
    render :index
  end

  def index
    @@current_user_id = current_user.id
    type = params[:statusType].to_s.scan(/[A-Z][a-z]+/).first == 'Borrow' ? 'requestee_id' : 'requester_id'
    status = params[:statusType].to_s.scan(/[a-z]+/).first
    @requests = Request.includes(:requestee, :tool, :requester).where("requests.#{type} = ? AND requests.status = ?", current_user.id, status)

    respond_to do |format|
      format.html {
        redirect_to requests_rq_path
      }
      format.json {
        render json: {
            requests: @requests.as_json(include: [:tool, :requestee, :requester])
        }
      }
    end
  end

  def update
    @request = Request.find(params[:id])
    @request.update(status: params[:status].to_s)

    if params[:status].to_s == 'accepted'
      request_id = @request[:id]
      tool_id = @request[:tool_id]
      @tool = Tool.find(tool_id)

      @tool.update(
          tool_status: 'Lent'
      )

      BorrowedTool.create!(
          request_id: request_id,
          tool_id: tool_id,
          user_id: params[:requestee_id]
      )
    end

    respond_to do |format|
      format.html { render :index }
      format.json { head :no_content  }
    end
  end

  def create
    Request.create!(
        tool_use: params[:"request-use"],
        requester_id: params["request"][:requester_id],
        requestee_id: @@current_user_id,
        status: "pending",
        tool_id: params["request"][:tool_id]
    )

    respond_to do |format|
      format.html { render :index }
      format.json { head :no_content  }
    end
  end
end

