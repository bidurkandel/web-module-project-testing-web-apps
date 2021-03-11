import React from "react";

import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Crazy Lambda School Integration Testing Challenge</a>
      </nav>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Welcome to My Lambda Challenge</a>
      </nav>
      <div className="App">
        <ContactForm />
      </div>
    </div>
  );
}
