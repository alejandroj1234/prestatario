class RequestsMailer < ApplicationMailer
  default from: 'vidan1234@gmail.com'
  layout 'mailer'

  def request_tool_email(requester, requestee, tool)
    @requester, @requestee, @tool = requester, requestee, tool
    mail(to: requester.email, subject: "A Tool Has Been Requested For Borrow")
  end
end
