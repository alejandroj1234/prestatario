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
  get "requests",  to: "requests#index"

  # Routes for Tools
  get    "tools/ng",                to: "tools#ng"
  get    "tools/ng/*angular_route", to: "tools#ng"
  get    "tools/ng/addTool",        to: "tools#ng/addTool"
  post   "tools/ng/addTool",       action:"create",  controller:"tools"
  delete "tools/*",                action:"destroy", controller:"tools"
  put    "tools/ng/viewTools/*id", action:"update",  controller:"tools"
  resources :tools, only: [ :index, :create, :update, :destroy ]

  # Routes for Search
  get    "search/mk",                to: "search#mk"
  get    "search/mk/*angular_route", to: "search#mk"
  resources :search, only: [ :index ]

  # Routes for Requests
  get    "requests/rq",                  to: "requests#rq"
  get    "requests/rq/pendingBorrow",    to: "requests#rq/pendingBorrow"
  get    "requests/rq/rejectedBorrow",   to: "requests#rq/rejectedBorrow"
  get    "requests/rq/acceptedLend",     to: "requests#rq/acceptedLend"
  get    "requests/rq/pendingLend",      to: "requests#rq/pendingLend"
  get    "requests/rq/rejectedLend",     to: "requests#rq/rejectedLend"
  post   "requests",                                 action:"create",  controller:"requests"
  put    "requests/rq/statusUpdate/*status/*id",     action:"update",  controller:"requests"
  resources :requests, only: [ :index ]

  # Routes for profiles
  get    "profiles",                to:"profiles#index"
  resources :profiles, only: [ :index ]

end



