class ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render json: @reviews
    end

    def update
        review = Review.find_by(params[:id])
        review.update!(review_params)
        render json: review
    end

    def create
        review = Review.create!(review_params)
        review.save
        render json: review, status: :created
    end


    def destroy
        review = Review.find_by(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:rating,:date,:text,:book_id,:user)
    end

end
