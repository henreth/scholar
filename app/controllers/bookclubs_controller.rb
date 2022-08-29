class BookclubsController < ApplicationController
  def index
    @bookclubs = Bookclub.all
    render json: @bookclubs, include: ["clubusers.user"]
  end

  def show
    bookclub = Bookclub.find(params[:id])
    render json: bookclub, include: ["clubusers.user"]
  end

  def update
    bookclub = Bookclub.find(params[:id])
    bookclub.update!(bookclub_params)
    render json: bookclub
  end

  def add_book
    bookclub = Bookclub.find(params[:club_id])
    books = bookclub.books
    books << params[:book]
    bookclub.update!(books: books)
    render json: @current_user, include: ["clubusers.bookclub"]
  end

  def remove_book
    bookclub = Bookclub.find(params[:club_id])
    bookToRemove = params[:book_id]
    books = bookclub.books
    filteredBooks = books.filter { |book| book["id"] != bookToRemove }
    bookclub.update!(books: filteredBooks)
    render json: @current_user, include: ["clubusers.bookclub"]
  end

  def create
    bookclub = Bookclub.create!(bookclub_params)
    newHost = {
      'first_name': @current_user.first_name,
      'last_name': @current_user.last_name,
      'username': @current_user.username,
      'id': @current_user.id,
      'profile_picture': @current_user.profile_picture,
    }
    bookclub.update!(host: newHost)
    bookclub.save
    Clubuser.create!(bookclub_id: bookclub.id, user_id: @current_user.id)
    render json: bookclub, status: :created
  end

  def destroy
    bookclub = Bookclub.find_by(params[:id])
    bookclub.destroy
    render json: bookclub
  end

  private

  def bookclub_params
    params.permit(:id, :name, :books, :description, :host, :image)
  end
end
