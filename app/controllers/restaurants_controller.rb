class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    @reviews     = @restaurant.reviews
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
