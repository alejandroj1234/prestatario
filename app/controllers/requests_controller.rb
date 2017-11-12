class RequestsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery prepend: true

  def rq
    @base_url = "/requests/rq"
    render :index
  end

  def index
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
    @tool = Tool.find(@request[:tool_id])

    if params[:status].to_s == 'accepted'
      @tool.update(tool_status: 'Lent')

      BorrowedTool.create!(
          request_id: @request[:id],
          tool_id: @request[:tool_id],
          user_id: params[:requestee_id]
      )
    else
      @tool.update(tool_status: 'notLent')
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
        requestee_id: current_user.id,
        status: "pending",
        tool_id: params["request"][:tool_id]
    )

    @tool = Tool.find(params["request"][:tool_id])
    @tool.update(tool_status: 'Pending')

    @requester = User.find(params["request"][:requester_id])
    @requestee = User.find(current_user.id)
    RequestsMailer.request_tool_email(@requester, @requestee, @tool).deliver

    respond_to do |format|
      format.html
      format.json
    end
  end
end

