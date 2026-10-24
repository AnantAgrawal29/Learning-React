import { createContext, useContext, useState } from "react";
import AccordianItem from "./AccordionItem";
import AccordianTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext({});

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error(
      "Accordion related components must be wrapped by <Accordion>.",
    );
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (id === prevId ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordianItem;
Accordion.Title = AccordianTitle;
Accordion.Content = AccordionContent;
