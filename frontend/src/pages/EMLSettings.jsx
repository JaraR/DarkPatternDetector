import { TextareaForm } from "@/components/emlopenaiform";
import { ButtonLink } from "@/components/ui/buttonlink";
// import { Button } from "@/components/ui/button";
// import backIcon from "/public/icons/back.png";

import Navbar from "@/components/ui/navbar";

export function EMLSettings() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-start gap-2">
        <ButtonLink to="/" className="flex items-center gap-2">
          <span>↖ Back</span>
        </ButtonLink>
      </div>

      <TextareaForm />
    </>
  );
}
