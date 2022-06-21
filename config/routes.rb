Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do

    get '/quotes/', to:"quotes#index"
    post '/quotes/', to:"quotes#create"
    get '/quotes/:id', to:"quotes#show"
    put '/quotes/:id', to:"quotes#update"
    patch '/quotes/:id', to:"quotes#update"
    delete '/quotes/:id', to:"quotes#destroy"

    resources :locations do
      resources :champions
    end
    get '/allChamp', to:'champions#index_all'
  end

end
