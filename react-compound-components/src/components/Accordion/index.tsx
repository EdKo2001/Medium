import React, { FC, ReactNode, useState } from "react";

import "./Accordion.css";

/**
 * Props for the Accordion component.
 */
interface AccordionProps {
  children: ReactNode;
}

/**
 * Props for the AccordionItem component.
 */
interface AccordionItemProps {
  index: number;
  label: string;
  children: ReactNode;
  activeIndex?: number;
  handleItemClick?: (index: number) => void;
}

/**
 * A compound component representing an accordion.
 */
interface AccordionComponent extends FC<AccordionProps> {
  Item: FC<AccordionItemProps>;
}

/**
 * The Accordion component.
 *
 * @param {AccordionProps} props - The component props.
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion: AccordionComponent = ({
  children,
}: AccordionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  /**
   * Handle the click event on an accordion item.
   *
   * @param {number} index - The index of the clicked item.
   */
  const handleItemClick = (index: number) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === index ? -1 : index
    );
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            index,
            activeIndex,
            handleItemClick,
          });
        }
        return child;
      })}
    </div>
  );
};

/**
 * The AccordionItem component.
 *
 * @param {AccordionItemProps} props - The component props.
 * @returns {JSX.Element} The rendered AccordionItem component.
 */
const AccordionItem: FC<AccordionItemProps> = ({
  index,
  label,
  activeIndex,
  handleItemClick,
  children,
}: AccordionItemProps): JSX.Element => {
  /**
   * Handle the click event on an accordion item button.
   */
  const handleClick = () => {
    handleItemClick?.(index);
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

// Attach the AccordionItem component as a property of the Accordion component.
Accordion.Item = AccordionItem;

export default Accordion;
