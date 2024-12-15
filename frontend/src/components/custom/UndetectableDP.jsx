import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ButtonLink } from "../ui/buttonlink";
import FilterIcon from "/public/icons/filter.png";
import { Label } from "@/components/ui/label";
import emotional from "/public/icons/emotion.png";
import obstruction from "/public/icons/obstruction.png";
import privacy from "/public/icons/privacy.png";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

export function UndetectableDP() {
    return(
        <Card className="border border-gray-300 m-1">
            <CardHeader className="pt-2 pb-1">
                <CardTitle className="flex items-center">
                    <img src={FilterIcon} alt="Filter Icon" className="h-6 w-6 mr-3" />
                    <span className="text-xl">Choose a Dark Pattern to detect</span>
                </CardTitle>

                <CardDescription>Generate dark pattern report</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">

                <div className="flex items-center justify-between space-x-3">
                    <Label
                    htmlFor="emotional-steering"
                    className="flex items-center space-x-3"
                    >
                        <img
                            src={emotional}
                            alt="Emotional Steering Filter Icon"
                            className="h-6 w-6 mr-2"
                        />
                        <span className="text-lg font-light">Emotional Steering</span>
                        <Tooltip
                            title={
                            <span style={{ fontSize: "0.85rem" }}>
                                Analyze posts/tweets on X.com and get a sentiment 
                                analysis report.
                            </span>
                            }
                        >
                            <InfoIcon
                            className="text-gray-300 cursor-pointer"
                            fontSize="small"
                            />
                        </Tooltip>
                    </Label>
                    {/* <Checkbox id="emotional-steering" /> */}
                    <ButtonLink to="/EMLPage" variant="border" size="sm">
                    Go
                    </ButtonLink>
                </div>
                <div className="flex items-center justify-between space-x-3">
                    <Label
                    htmlFor="obstruction"
                    className="flex items-center space-x-3"
                    >
                        <img
                            src={obstruction}
                            alt="Obstruction Filter Icon"
                            className="h-6 w-6 mr-2"
                        />
                        <span className="text-lg font-light">Obstruction</span>
                        <Tooltip
                            title={
                            <span style={{ fontSize: "0.85rem" }}>
                                Ask a question when X.com is obstructing user attempts to 
                                complete a task and receive step-by-step instructions.
                            </span>
                            }
                        >
                            <InfoIcon
                            className="text-gray-300 cursor-pointer"
                            fontSize="small"
                            />
                        </Tooltip>
                    </Label>
                    {/* <Checkbox id="obstruction" /> */}
                    <ButtonLink to="/ObstructionPage" variant="border" size="sm">
                    Go
                    </ButtonLink>
                </div>
                <div className="flex items-center justify-between space-x-3">
                    <Label
                    htmlFor="privacy-zuckering"
                    className="flex items-center space-x-3"
                    >
                        <img
                            src={privacy}
                            alt="Privacy Zuckering Filter Icon"
                            className="h-6 w-6 mr-2"
                        />
                        <span className="text-lg font-light">Privacy Zuckering</span>

                        <Tooltip
                            title={
                            <span style={{ fontSize: "0.85rem" }}>
                                Provides tips and information regarding X.com's 
                                privacy settings and what they <b>actually</b> do.
                            </span>
                            }
                        >
                            <InfoIcon
                            className="text-gray-300 cursor-pointer"
                            fontSize="small"
                            />
                        </Tooltip>
                    </Label>
                    {/* <Checkbox id="privacy-zuckering" /> */}
                    <ButtonLink to="/ObstructionPage" variant="border" size="sm">
                    Go
                    </ButtonLink>
                </div>
            </CardContent>
        </Card>
    )
}