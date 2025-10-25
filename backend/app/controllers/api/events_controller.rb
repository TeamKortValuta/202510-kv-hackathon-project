module Api do
    class EventsController < ActionController::Base

        def index
            events = Event.all
        end

        def show
            
        end

        def reserve
        end
    end
end

