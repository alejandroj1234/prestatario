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
  get "borrowed", to: "borrowed#index"
  get "lent", to: "lent#index"
  get "search", to: "search#index"
  get "inventory", to: "inventory#index"
  get "messages", to: "messages#index"
end
