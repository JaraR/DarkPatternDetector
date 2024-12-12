import { CircleHelp } from "lucide-react";
import { ButtonLink } from "../ui/buttonlink";

export function PieChartLegendItem({
  switchTab,
  legendIcon,
  dpName,
  dpCount,
  accordionVal,
}) {
  return (
    <div className="flex items-center space-y-1">
      <img
        src={legendIcon}
        alt="Legend Label Icon"
        className="h-[15px] w-[15px] self-center "
      />
      <ButtonLink
        switchTab={switchTab}
        targetTab="settings"
        variant="link"
        size="legendItems"
      >
        {dpName}
      </ButtonLink>
      <ButtonLink
        switchTab={switchTab}
        targetTab="about-dp"
        variant="link"
        size="legendItems"
      >
        {dpCount}
      </ButtonLink>
      <ButtonLink
        switchTab={switchTab}
        targetTab="about-dp"
        defaultAccordion={accordionVal}
        variant="link"
        size="icon"
      >
        <CircleHelp className="w-[20px] h-[20px]" />
      </ButtonLink>
    </div>
  );
}
