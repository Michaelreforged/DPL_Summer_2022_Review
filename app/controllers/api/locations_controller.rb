class Api::LocationsController < ApplicationController
  before_action :set_location, only:[:show,:destroy,:update]

  def index
    render json: Location.all
  end

  def show
    render json: @location
  end

  def create
    location = Location.new(location_params)
    if(location.save)
      render json: location
    else
      render json: {errors: location.errors.full_messages}, status:422
    end
  end

  def update
    if(@location.update(location_params))
      render json: @@location
    else
      render json: {errors: @location.errors.full_messages}, status:422
    end

  end

  def destroy
    render json: @location.destroy
  end

  private

  def location_params
    params.require(:location).permit(:name)
  end

  def set_location
    @location = Location.find(params[:id])
  end

end
