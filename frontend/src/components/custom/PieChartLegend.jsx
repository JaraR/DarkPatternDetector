import { CircleHelp } from "lucide-react";
import { ButtonLink } from "../ui/buttonlink";


export function PieChartLegendItem({  switchTab, legendIcon, dpName, dpCount, accordionVal }) {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <img src={legendIcon} alt="Legend Label Icon" className="h-[20px] w-[20px] self-center" />
            <ButtonLink switchTab={switchTab} targetTab="settings" variant="link">
                {dpName}
            </ButtonLink>
            <ButtonLink switchTab={switchTab} targetTab="about-dp" variant="link">
                {dpCount}
            </ButtonLink>
            <ButtonLink switchTab={switchTab} targetTab="about-dp" defaultAccordion={accordionVal} variant="link" size="icon">
                <CircleHelp className="w-[20px]" />
            </ButtonLink>
        </div>
    )
}
