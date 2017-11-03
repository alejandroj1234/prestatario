Rails.application.routes.draw do

  # Needed to change path for editing user account
  devise_scope :user do
    get "/edit_user" => "devise/registrations#edit", as: "edit_user_registration" # custom path to sign_up/registration
  end

  # list all the controllers for device
  devise_for :users, :controllers => {
      confirmations: "users/confirmations",
      omniauth: "users/omniauth",
      passwords: "users/passwords",
      registrations: "users/registrations",
      sessions: "users/sessions",
      unlocks: "users/unlocks"
  }

  # Route for homepage
  root to: "homepage#index"

  # Routes for links in the sidebar
  get "dashboard", to: "dashboard#index"
  get "borrowed",  to: "borrowed#index"
  get "lent",      to: "lent#index"
  get "search",    to: "search#index"
  get "tools",     to: "tools#index"
  get "messages",  to: "messages#index"

  # Routes for Tools
  get    "tools/ng",                to: "tools#ng"
  get    "tools/ng/*angular_route", to: "tools#ng"
  get    "tools/ng/addTool",        to: "tools#ng/addTool"
  post   "tools/ng/addTool",       action:"create",  controller:"tools"
  delete "tools/*",                action:"destroy", controller:"tools"
  put    "tools/ng/viewTools/*id", action:"update",  controller:"tools"
  resources :tools, only: [ :index, :create, :update, :destroy ]

end
