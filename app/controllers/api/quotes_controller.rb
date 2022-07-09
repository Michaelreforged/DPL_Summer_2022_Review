class Api::QuotesController < ApplicationController
  before_action :set_quote, only:[:show,:destroy,:update]
  before_action :page, only: [:pageQuotes]

  def index
    render json: Quote.all.order(:created_at)
  end

  def show
    render json: @quote
  end

  def create
    quote = Quote.new(quote_params)
    if(quote.validate)
      quote.save
      render json: quote
    else
      render json: {errors: quote.errors.full_messages}, status:422
    end
  end

  def update
    if(@quote.update(quote_params))
      render json: @quote
    else
      render json: {errors: quote.errors.full_messages}, status:422
    end
  end

  def destroy
    render json: @quote.destroy
  end

  def pageQuotes
    quote = Quote.all
    count = quote.count
    render json: {quote: Kaminari.paginate_array(quote).page(@page).per(@per), count:count, per:@per}
  end

  private

  def page
    @page = params[:page] || 1
    @per = params[:per] || 30
  end

  def set_quote
    @quote = Quote.find(params[:id])
  end
  
  def quote_params
    params.require(:quote).permit(:phrase)
  end

end
