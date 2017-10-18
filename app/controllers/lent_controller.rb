class LentController < ApplicationController
  before_action :authenticate_user!

  def index
  end
end