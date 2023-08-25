import React, { useContext } from "react";

import { AccordionContext } from "./index";

interface AccordionItemProps {
  index: number;
  label: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  label,
  children,
}) => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { activeIndex, setActiveIndex } = context;

  const handleClick = () => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion">
      <button onClick={handleClick} className="accordion-button">
        {label}
      </button>
      {activeIndex === index && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
