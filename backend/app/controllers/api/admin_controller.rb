module Api
    class AdminController < ActionController::Base
        protect_from_forgery with: :null_session
        def create_event
            begin
                created_event = Event.create!(
                    name: params[:name],
                    date: params[:date],
                    info: params[:info]
                )
                render json: { "result": "ok" }, status: :created
            rescue Exception => e
                render json: { "error": "#{e}" }, status: :internal_server_error
            end
        end

        def verify_event_code
            event_user = EventUser.find_by(invitation_code: params[:invitation_code])
            pp event_user
            if event_user.nil?
                render json: { "result": "not found" }, status: :not_found
            else
                data = {
                    is_ok: true,
                    user_name: user.name
                }
                render json: data.to_json(), status: :ok
            end
        end
    end
end
