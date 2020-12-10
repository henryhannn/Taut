Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]

    resources :channels, only: [:index, :show, :create, :destroy]

    resource :session, only: [:create, :destroy]

    resources :messages, only: [:index, :create, :destroy]

    resources :memberships, only: [:create]
  end

  root to:'static_pages#root'
  mount ActionCable.server, at: '/cable'
end