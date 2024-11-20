import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import adsHeader from "/src/assets/ads-header.png";
import autoplayHeader from "/src/assets/autoplay-header.png";

export function GuideTab() {
  return (
    <div className="flex justify-center p-0">
      <Card>
        <CardContent className="flex flex-col items-center">
          <img
            src={adsHeader}
            alt="Guide"
            className="w-full h-auto rounded-md"
          />
        </CardContent>
        <CardContent className="flex flex-col items-center">
          <img
            src={autoplayHeader}
            alt="Guide"
            className="w-full h-auto rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default GuideTab;
