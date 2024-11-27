import { Link } from "react-router-dom";
import { Button } from "./button";

export function ButtonLink({ to, children }) {
  return (
    <Button variant="link" aschild>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
