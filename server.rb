require 'sinatra'
require 'json'

  enable :sessions
  set :session_secret, 'secret'
  set :public_folder, proc { File.join(root) }

# get '/temperature/:remoteTemperature' do
#   session[:remoteTemperature] = params[:remoteTemperature]
# end
#

get '/temperature/:default' do
  session[:persist_temperature] ||= params[:default]
  { temperature: session[:persist_temperature] }.to_json
end

post '/temperature' do
  session[:persist_temperature] = params[:current_temp]
end




