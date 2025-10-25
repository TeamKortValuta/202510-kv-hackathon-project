module Api do 
    class AdminController < ActionController::Base

        def create_event 

            Event.create()


            render 'shared/http_status', locals: { code: '201', message:
                HttpStatusHelper::ERROR_CODE['message']['201'] }, status: :created
        end

        def verify_event_code
            event = Event_Users.find_by(invitation_code: params[:invitation_code])
            if user.nil?
                render 'shared/http_status', locals: { code: '404', message:
                    HttpStatusHelper::ERROR_CODE['message']['404'] }, status: :not_found
            else
                render 'shared/http_status', locals: { code: '200', message:
                    HttpStatusHelper::ERROR_CODE['message']['200'] }, status: :ok
            end
        end
    end
end