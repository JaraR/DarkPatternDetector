import { TextareaForm } from "@/components/custom/emlopenaiform";
import { ButtonLink } from "@/components/ui/buttonlink";
import Navbar from "@/components/custom/Navbar";

export function EMLPage() {
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
