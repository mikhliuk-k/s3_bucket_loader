Rails.application.routes.draw do
  root 'home#show'
  resource :attachment, controller: :attachment, only: [:update]
end
