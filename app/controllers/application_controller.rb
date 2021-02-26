class ApplicationController < ActionController::Base
    http_basic_authenticate_with name: 'dgamezn', password: 'pass123', except: [:index, :show]
end
