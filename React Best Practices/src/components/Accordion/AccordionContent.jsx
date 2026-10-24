import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();
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
