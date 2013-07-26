require 'bundler/setup'
require 'net/http'
require 'uri'
Bundler.require(:default)

use Rack::Static, :urls => ["/public"]

# strips tags
# http://stackoverflow.com/questions/1512850/grabbing-text-between-all-tags-in-nokogiri
class TextHandler < Nokogiri::XML::SAX::Document
  def initialize
    @chunks = []
  end

  attr_reader :chunks

  def cdata_block(string)
    characters(string)
  end

  def characters(string)
    @chunks << string.strip if string.strip != ""
  end
end

get "/" do
	erb :index
end

post "/twebfeed" do
	# get the document
	tags = params[:tags]
	doc = Nokogiri::HTML Net::HTTP.get URI.parse params[:url]

	# find the element
	content = ""
	doc.css('div#mainContent').each { |elem|
		content = elem.to_s
	}
	if content.empty? then
		doc.css('div.apt').each { |elem|
			content = elem.to_s
		}
	end
	if content.empty? then
		doc.css('pre.owner').each { |elem|
			content = elem.to_s.gsub /<br( \/)?>/, "\n"
		}
	end

	# strip tags if requested
	if tags == '0' then
		th = TextHandler.new
		parser = Nokogiri::HTML::SAX::Parser.new th
		parser.parse content
		halt th.chunks.join
	else
		halt content
	end
end