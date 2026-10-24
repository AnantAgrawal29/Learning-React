import AccordionContent from "./AccordionContent";
import AccordianTitle from "./AccordionTitle";

export default function AccordianItem({ className, children }) {
  return <li className={className}>{children}</li>;
}
