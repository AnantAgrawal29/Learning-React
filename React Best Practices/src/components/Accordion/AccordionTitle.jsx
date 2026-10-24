import { useAccordionContext } from "./Accordion";

export default function AccordianTitle({ id, className, children }) {
  const { toggleItem } = useAccordionContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
