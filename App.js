import React from "react";
import UserContext from "./contexts/UserContext";
import Navigation from "./routes/navigation";

export default function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <Navigation />
    </UserContext.Provider>
  );
}
