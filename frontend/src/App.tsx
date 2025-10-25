import React from "react";
import EventLists from "./components/EventLists";



const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <EventLists />
    </div>
  );
};

export default App;
