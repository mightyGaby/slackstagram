require 'bundler'
Bundler.require()

require 'json'
require 'net/http'
require 'sinatra'


# SLACK_TOKEN = xoxp-3171645816-3837774403-4404884034-cdbf53

#link to index (html)

get '/' do
  erb :index
end


#get data from api (ruby)
get '/api/groups.history' do
  content_type :json
  api_response = HTTParty.get("https://slack.com/api/groups.history?token=xoxp-3171645816-3837774403-4404884034-cdbf53&channel=G03Q22F24&count=1000&pretty=1")
  # api_response = HTTParty.get("https://slack.com/api/groups.history?token=xoxp-3171645816-3837774403-4404884034-cdbf53&channel=G03Q22F24&query=giphy&count=1000&pretty=1")

  image_urls = api_response['messages'].map do |message|
    if message['attachments'] && message['attachments'][0] && url = message['attachments'][0]["image_url"]
      url
    else
      nil
    end
  end.select {|d| d}

  image_urls.to_json
end
#post data to website (js)


matt = api_response['messages'].each do |message|
  if message['user'] ='U03JDMRCD'
    message['messages']
  else
    nil
  end
end.select {|d| d}

matt.to_json
end
