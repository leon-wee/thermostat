require 'sinatra'
require 'sinatra/base'



class Thermostat < Sinatra::Base

  set :public_folder, proc { File.join(root) }

  get '/' do
    erb :'index2.html'
  end



end


