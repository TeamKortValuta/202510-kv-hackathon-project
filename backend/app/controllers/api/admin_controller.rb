module Api do 
    class AdminController < ActionController::Base

        def create_event 

            Event.create()

            
            render 'shared/http_status', locals: { code: '201', message:
                HttpStatusHelper::ERROR_CODE['message']['201'] }, status: :created
        end

        def verify_event_code
        end
    end
end