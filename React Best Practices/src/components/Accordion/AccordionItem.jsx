import { createContext, useContext } from "react";

const AccordionItemContext = createContext({});

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx)
    throw new Error(
      "AccordionItem related components must be wrapped by <Accordian.Item>.",
    );
  return ctx;
}

export default function AccordianItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
