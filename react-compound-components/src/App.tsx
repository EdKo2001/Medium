import React from "react";

import Accordion from "./components/Accordion";

import "./App.css";

const App: React.FC = () => {
  return (
    <Accordion>
      <Accordion.Item index={0} label="Section 1">
        Content for Section 1
      </Accordion.Item>
      <Accordion.Item index={1} label="Section 2">
        Content for Section 2
      </Accordion.Item>
      <Accordion.Item index={2} label="Section 3">
        Content for Section 3
      </Accordion.Item>
    </Accordion>
  );
};

export default App;
