class BookclubsController < ApplicationController

    def index
        @bookclubs = Bookclub.all
        render json: @bookclubs
    end

    def update
        bookclub = Bookclub.find_by(params[:id])
        bookclub.update!(bookclub_params)
        render json: bookclub
    end

    def add_user

    end

    def remove_user

    end

    def add_book

    end

    def remove_book

    end

    def create
        bookclub = Bookclub.create!(bookclub_params)
        bookclub.save
        render json: bookclub, status: :created
    end

    def destroy
        bookclub = Bookclub.find_by(params[:id])
        bookclub.destroy
        render json: bookclub
    end

    private

    def bookclub_params
        params.permit(:id,:name,:books)
    end

end
