module Api
  class EventsController < ActionController::Base
    protect_from_forgery with: :null_session

    def index
      events = Event.all.order(:id)
      render json: { events: events.map { |event| serialize_event(event) } }
    end

    def show
      event = Event.find(params[:id])
      render json: serialize_event(event)
    rescue ActiveRecord::RecordNotFound
      head :not_found
    end

    def reserve
      event = Event.find(params[:id])
      attributes = reserve_params

      unless attributes[:user_name].present? && attributes[:email].present?
        return render json: { error: "user_name and email are required" }, status: :unprocessable_entity
      end

      user = User.find_or_initialize_by(email: attributes[:email])
      user.name = attributes[:user_name]
      user.save!

      event_user = EventUser.find_or_initialize_by(event: event, user: user)
      event_user.invitation_code = event_user.invitation_code.presence || Array.new(6) { rand(0..9) }.join
      event_user.save!

      render json: { invite_code: event_user.invitation_code }, status: :created
    rescue ActiveRecord::RecordInvalid => e
      render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
    rescue ActiveRecord::RecordNotFound
      head :not_found
    end

    private

    def serialize_event(event)
      {
        id: event.id,
        name: event.name,
        date: event.date,
        info: event.info
      }
    end

    def reserve_params
      params.permit(:user_name, :email)
    end
  end
end
