Rails.application.routes.draw do
  resources :jobs, only: [:index, :show]
  resources :employers, only: [:index, :show]
  resources :applicants, only: [:index, :show]

  post "/signup", to: "applicants#create"
  get "/me", to: "applicants#show"
  post "/applicant_login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/job_matches", to: "jobs#user_jobs"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
