class Api::ChampionsController < ApplicationController
  before_action :set_location, except:[:index_all]
  before_action :set_champ, only:[:show,:update,:destroy]

  def index_all
    render json: Champion.all
  end

  def index
    render json: @location.champions.all
  end

  def show
    render json: @champ
  end

  def create
    @champ = @location.champions.new(champ_params)
    if(@champ.save)
      render json: @champ
    else
      render json: {errors: @champ.errors.full_messages}, status: 422
    end
  end

  def update
    if(@champ.update(champ_params))
      render json: @champ
    else
      render json: {errors: @champ.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @champ.destroy
  end

  private

  def set_location
    @location = Location.find(params[:location_id])
  end

  def set_champ
    @champ = @location.champions.find(params[:id]) #This will limit the champion that is found by the location(parent)
    # @champ = Champion.find(params[:id]) #Will find the champion just based of the id with no restrictions from the parent (might be better for has many through)
  end

  def champ_params
    params.require(:champion).permit(:name,:skills,:location_id)
  end


end
