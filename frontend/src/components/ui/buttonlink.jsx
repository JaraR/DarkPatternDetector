import { Link } from "react-router-dom";
import { Button } from "./button";

export function ButtonLink({ variant = "default", size = "default", to, children }) {
  return (
    <Button variant={variant} size={size} aschild>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
