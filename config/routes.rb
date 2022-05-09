Rails.application.routes.draw do
  resources :jobs, only: [:index, :show]
  resources :employers, only: [:index, :show]
  resources :applicants, only: [:index, :show]



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
