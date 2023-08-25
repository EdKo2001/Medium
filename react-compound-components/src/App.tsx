import React from "react";

import Accordion from "./components/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

import "./App.css";

const App: React.FC = () => {
  return (
    <Accordion>
      <AccordionItem index={0} label="Section 1">
        Content for Section 1
      </AccordionItem>
      <AccordionItem index={1} label="Section 2">
        Content for Section 2
      </AccordionItem>
      <AccordionItem index={2} label="Section 3">
        Content for Section 3
      </AccordionItem>
    </Accordion>
  );
};

export default App;
