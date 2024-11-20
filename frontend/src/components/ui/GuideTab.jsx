import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import userFlow from "/src/assets/user-flow.png";

export function GuideTab() {
  return (
    <div className="flex justify-center p-0">
      <Card>
        <CardContent className="flex flex-col items-center">
          <img
            src={userFlow}
            alt="Guide"
            className="w-full h-auto rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default GuideTab;
