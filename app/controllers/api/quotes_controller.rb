class Api::QuotesController < ApplicationController
  before_action :set_quote, only:[:update,:show,:destroy]

  def index
    render json: Quote.all.order(:created_at)
  end

  def show
    render json: @quote
  end

  def create
    quote = Quote.new(quote_params)
    if(quote.save)
      render json: quote
    else
      render json: {errors: quote.errors.full_messages}, status: 422
    end
  end

  def update
    if(@quote.update(quote_params))
      render json: @quote
    else 
      render json: {errors: quote.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @quote.destroy
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
  end

  def quote_params
    params.require(:quote).permit(:phrase)
  end
end
