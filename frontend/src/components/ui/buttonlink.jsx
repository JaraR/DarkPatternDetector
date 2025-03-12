import { Link } from "react-router-dom";
import { Button } from "./button";

export function ButtonLink({ variant = "default", size = "default", to, children, switchTab, targetTab, defaultAccordion }) {
  return (
    <Link to={to} state={defaultAccordion} onClick={() => switchTab(targetTab)}>
      <Button variant={variant} size={size}>{children}</Button>
    </Link>
  );
}
