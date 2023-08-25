import React, { ReactNode, useState, createContext } from "react";

import "./Accordion.css";

// Create a context to share state between Accordion and AccordionItem
interface AccordionContextType {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps {
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <div>
      <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
