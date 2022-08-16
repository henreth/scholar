class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        @users = User.all
        render json: @users
    end

    def update
        @current_user.update!(user_params)
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, status: :ok
    end

    def destroy
        user = @user
        user.destroy
        head :no_content
    end

    def add_to_current
        bookToAdd = params[:book]
        userCurrent = @current_user.current
        if userCurrent.map{|book| book['id']}.include?(bookToAdd['id'])
            msg = 'This book is currently in your list'
            render json: msg, status: :ok
        else
        userCurrent << book
        @current_user.update!(current: userCurrent)
        render json: @current_user
        end 
    end

    private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(
          :id,
          :username, 
          :password, 
          :password_confirmation,
          )
    end
end