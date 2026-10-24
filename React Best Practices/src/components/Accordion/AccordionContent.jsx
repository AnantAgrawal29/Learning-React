import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContext();
  return (
    <div
      className={
        id === openItemId
          ? `${className ?? ""} open`
          : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
