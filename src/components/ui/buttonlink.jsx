import { Link } from "react-router-dom";
import { Button } from "./button";

export function ButtonLink({ to, children }) {
  return (
    <Button aschild>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
