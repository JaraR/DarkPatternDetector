import { TextareaForm } from "@/components/emlopenaiform";
import { ButtonLink } from "@/components/ui/buttonlink";
import Navbar from "@/components/ui/navbar";

export function EMLSettings() {
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
