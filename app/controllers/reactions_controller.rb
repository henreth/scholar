class ReactionsController < ApplicationController

    def create
        reaction = Reaction.create!(reaction_params)
        reaction.save
        render json: reaction, status: :created
    end

    private 
    
    def reaction_params
        params.permit(:id,:emoji,:review_id,:user_id)
    end
end
