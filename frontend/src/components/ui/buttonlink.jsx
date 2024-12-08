import { Link } from "react-router-dom";
import { Button } from "./button";

export function ButtonLink({ variant = "default", size = "default", to, children, switchTab, targetTab }) {
  let defaultTab = "";

  // sets react-router-dom's Link state to be used as defaultTab value for home.jsx tabs
  if (to === "/") {
    defaultTab = "settings";
  } else {
    defaultTab = "results"
  }

  return (
    <Link to={to} state={defaultTab}>
      <Button variant={variant} size={size} onClick={() => switchTab(targetTab)} >{children}</Button>
    </Link>
  );
}
