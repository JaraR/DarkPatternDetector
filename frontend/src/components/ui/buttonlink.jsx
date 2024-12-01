import { Link } from "react-router-dom";
import { Button } from "./button";

export function ButtonLink({ variant = "default", size = "default", to, children }) {
  return (
    <Link to={to}>
      <Button variant={variant} size={size}>{children}</Button>
    </Link>
  );
}
