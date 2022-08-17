Rails.application.routes.draw do
  resources :reviews, only: [:index,:destroy,:create,:update]
  resources :users

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  #User
  post "/addtocurrent", to: "users#add_to_current"
  post "/removefromcurrent", to: "users#remove_from_current"

  #Review


   
end
