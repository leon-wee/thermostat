require 'sinatra'
require 'json'

  set :public_folder, proc { File.join(root) }

get '/temperature/:remoteTemperature' do
  session[:remoteTemperature] = params[:remoteTemperature]
end





