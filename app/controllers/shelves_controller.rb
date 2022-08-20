class ShelvesController < ApplicationController
    def add_book
        bookToAdd = params[:book]
        shelf = shelf.find_by(params[:shelf_id])
        books = shelf.books
        if books.map{|book| book['id']}.include?(bookToAdd['id'])
            msg = 'This book is already in this list.'
            render json: msg
        else
        books << bookToAdd
        shelf.update!(books: books)
        render json: shelf
        end 
    end

    def remove_book
        bookToRemove = params[:id]
        shelf = shelf.find_by(params[:shelf_id])
        books = shelf.books
        newBooks = books.filter{|book| book['id'] != bookToRemove}
        shelf.update!(books: books)
        render json: shelf
    end

    def create
        shelf = Shelf.create!(shelf_params)
        shelf.save
        render json: shelf, status: :created
    end

    def destroy
        shelf = Shelf.find_by(params[:id])
        shelf.destroy
        render json: shelf
    end

    private

    def shelf_params
        params.permit(:id,:name,:books, :user_id)
    end

end
