import { useEffect, useState } from "react"
import type { EventModel } from "../models/EventModel";
import devRootUrl from "../models/ServerVars";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { useParams } from "react-router";

export const Event = (): React.ReactElement => {
    const [hasError, setHasError] = useState(false);
    const [event, setEvent] = useState<EventModel>();

    const param = useParams();

    // API Call for single event on init
    useEffect(() => {
        const listUrl = devRootUrl;
        try {
            async () => {
                const res = await fetch(listUrl + 'events/' + param.eventId);
                setEvent(await res.json());
            }
            setEvent({date: new Date(), id: 1, info: "Test", name: "Test"});
        } catch (error) {
            console.error(error);
            setHasError(true);
        }
    }, [])

    return (
        <>{(hasError == false && event != null) &&
            <div>
                <div><h3>{event.name}</h3></div>
                <div><span>Event Date: {event.date.toString()}</span></div>
                <hr></hr>
                <div>
                    <div>About This Event:</div>
                    <div>{event.info}</div>
                </div>
            </div>
        }
            {(hasError == false && event == null) && <Loading />}
            {(hasError) && <ErrorMessage></ErrorMessage>}
        </>
    )
}