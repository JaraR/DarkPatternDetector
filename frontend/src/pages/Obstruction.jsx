import { TextareaForm } from "@/components/obstructionopenaiform";
import { ButtonLink } from "@/components/ui/buttonlink";
import Navbar from "@/components/ui/navbar";

export function Obstruction() {
  return (
    <>
      <Navbar />
      <ButtonLink to="/" variant="link">
        ↖ Back
      </ButtonLink>
      <TextareaForm />
    </>
  );
}