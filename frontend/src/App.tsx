import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { CreateEvent } from './components/CreateEvent'
import { EventList } from './components/EventLists'
import { Event } from './components/Event'
import { Invite } from './components/Invite'

 export const App =(): React.ReactElement => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<EventList/>}></Route>
          <Route path="/event/:eventId" element={<Event/>}></Route>
          <Route path="/createEvent" element={<CreateEvent/>}></Route>
          <Route path="/invite" element={<Invite/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
