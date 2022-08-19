Rails.application.routes.draw do
  resources :reactions, only: [:index,:destroy,:create,:update]
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
  post "/allbookreviews", to: "reviews#find_all_book_reviews"
  post "/removereview", to: "reviews#destroy"

  #Reaction
  # post "createreaction", to: "reactions#create"

   
end
