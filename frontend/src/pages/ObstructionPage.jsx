import { TextareaForm } from "@/components/custom/obstructionopenaiform";
import { ButtonLink } from "@/components/ui/buttonlink";
import Navbar from "@/components/custom/Navbar";
import { TipCarousel } from "@/components/custom/TipCarousel";

export function ObstructionPage() {
  return (
    <>
      <Navbar />
      <ButtonLink to="/" variant="link">
        ↖ Back
      </ButtonLink>
      <TextareaForm />
      <TipCarousel />
    </>
  );
}