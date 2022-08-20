Rails.application.routes.draw do
  resources :clubusers, only: [:create,:destroy]
  resources :bookclubs, only: [:index,:destroy,:create,:update]
  resources :reactions, only: [:destroy,:create]
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
  post "removereaction", to: "reactions#remove_reaction"

  #Bookclub
  post 'addbooktoclub', to: "bookclubs#add_book"
  post 'removebookfromclub', to: "bookclubs#remove_book"

  #Clubuser
  post 'removeclubuser', to: "clubusers#destroy"
   
end
