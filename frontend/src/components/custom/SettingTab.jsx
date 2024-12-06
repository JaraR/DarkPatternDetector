import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FilterIcon from "/public/icons/filter.png";
import infinite from "/public/icons/infinite.png";
import autoplay from "/public/icons/autoplay.png";
import emotional from "/public/icons/emotion.png";
import notification from "/public/icons/notification.png";
import obstruction from "/public/icons/obstruction.png";
import ads from "/public/icons/ads.png";
import privacy from "/public/icons/privacy.png";
import { ButtonLink } from "@/components/ui/buttonlink";
import tooltipAutoplay from "../../assets/tooltip-autoplay.png";
import tooltipAds from "../../assets/tooltip-ads.png";
import tooltipNotif from "../../assets/tooltip-notif.png";

// import CustomizationCard from "@/components/ui/CustomizationCard";

// import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

// "const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });"

// eslint-disable-next-line react/prop-types
export default function SettingTest() {
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isPromotedAds, setIsProtomotedAds] = useState(false);
  const [isEngagementNotif, setIsEngagementNotif] = useState({});
  // const [openSnackbar, setOpenSnackbar] = useState(false);

  // autoplay detection
  const startAutoplayDetection = (e) => {
    if (chrome.storage) {
      chrome.storage.sync.set({ autoplay: e });
    }
    setIsAutoplay(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["autoplay"], (result) => {
        setIsAutoplay(result.autoplay);
      });
    }
    const storageListener = (changes, areaName) => {
      if (areaName === "sync" && changes.autoplay) {
        setIsAutoplay(changes.autoplay.newValue);
      }
    };

    chrome.storage.onChanged.addListener(storageListener);

    const handleTabClose = () => {
      setIsAutoplay(false);
      chrome.storage.sync.set({ autoplay: false });
    };

    // Listen for tab close
    chrome.tabs.onRemoved.addListener(handleTabClose);

    // Cleanup listeners when the component is unmounted
    return () => {
      chrome.tabs.onRemoved.removeListener(handleTabClose);
      chrome.storage.onChanged.removeListener(storageListener);
    };
  }, []);

  //prmoted ads detection
  const startPromotedAdsDetection = (e) => {
    if (chrome.storage) {
      chrome.storage.sync.set({ promotedAds: e });
    }
    setIsProtomotedAds(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["promotedAds"], (result) => {
        setIsProtomotedAds(result.promotedAds);
      });
    }
  });

  // Engagement notification detection
  const startEngagementNotifDetection = (e) => {
    if (chrome.storage) {
      chrome.storage.sync.set({ engagementNotif: e });
    }
    setIsEngagementNotif(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["engagementNotif"], (result) => {
        setIsEngagementNotif(result.engagementNotif);
      });
    }
  });

  return (
    <>
      <Card className="border border-gray-300 m-3">
        <CardHeader className="pt-2 pb-1">
          <CardTitle className="flex items-center">
            <img src={FilterIcon} alt="Filter Icon" className="h-6 w-6 mr-3" />
            <span className="text-xl">Choose a Dark Pattern to detect</span>
          </CardTitle>

          <CardDescription>
            Navigate to X and see X-Factors in action
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center justify-between space-x-3">
            <Label htmlFor="autoplay" className="flex items-center space-x-3">
              <img
                src={autoplay}
                alt="Autoplay Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Autoplay</span>

              <Tooltip
                title={
                  <span style={{ fontSize: "0.85rem", Width: "550px" }}>
                    <img
                      src={tooltipAutoplay}
                      alt="Autoplay info"
                      style={{ width: "100%" }}
                    />
                    Navigate to X website to see X-Factors in action!
                  </span>
                }
              >
                <InfoIcon
                  className="text-gray-300 cursor-pointer"
                  fontSize="small"
                />
              </Tooltip>
            </Label>

            <Checkbox
              id="autoplay"
              checked={isAutoplay}
              onCheckedChange={startAutoplayDetection}
            />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="infinite-scrolling"
              className="flex items-center space-x-3"
            >
              <img
                src={infinite}
                alt="Infinite Scrolling Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Infinite Scrolling</span>
              <Tooltip
                title={
                  <span style={{ fontSize: "0.85rem" }}>
                    Notifify user when infinite scrolling is detected and shows
                    a timer
                  </span>
                }
              >
                <InfoIcon
                  className="text-gray-300 cursor-pointer"
                  fontSize="small"
                />
              </Tooltip>
            </Label>
            <Checkbox id="infinite-scrolling" />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="engagement-notification"
              className="flex items-center space-x-3"
            >
              <img
                src={notification}
                alt="Engagement Notification Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">
                Engagement Notification
              </span>
              <Tooltip
                title={
                  <span style={{ fontSize: "0.85rem", Width: "550px" }}>
                    <img
                      src={tooltipNotif}
                      alt="Notif info"
                      style={{ width: "100%" }}
                    />
                    Navigate to X website to see X-Factors in action!
                  </span>
                }
              >
                <InfoIcon
                  className="text-gray-300 cursor-pointer"
                  fontSize="small"
                />
              </Tooltip>
            </Label>
            <Checkbox
              id="engagement-notification"
              checked={isEngagementNotif}
              onCheckedChange={startEngagementNotifDetection}
            />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="promoted-ads"
              className="flex items-center space-x-3"
            >
              <img
                src={ads}
                alt="Promoted Ads Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Promoted Ads</span>
              <Tooltip
                title={
                  <span style={{ fontSize: "0.85rem", Width: "550px" }}>
                    <img
                      src={tooltipAds}
                      alt="Ads info"
                      style={{ width: "100%" }}
                    />
                    Navigate to X website to see it in action!
                  </span>
                }
              >
                <InfoIcon
                  className="text-gray-300 cursor-pointer"
                  fontSize="small"
                />
              </Tooltip>
            </Label>
            <Checkbox
              id="promoted-ads"
              checked={isPromotedAds}
              onCheckedChange={startPromotedAdsDetection}
            />
          </div>
        </CardContent>
      </Card>
      {/* this is #2 category of dark pattern detection */}
      <Card className="border border-gray-300 m-3">
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
                    Give a reminder popup when the website is obstructing user
                    to complete a task.
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
            <ButtonLink to="/EMLPage" variant="border">
              Go
            </ButtonLink>
          </div>
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
                    Analyze the content on X website and get the sentiment
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
            <ButtonLink to="/EMLPage" variant="border">
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
                    Give a reminder popup when user is about to share personal
                    information.
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
            <ButtonLink to="/EMLPage" variant="border">
              Go
            </ButtonLink>
          </div>
        </CardContent>
      </Card>
      {/* <CustomizationCard /> */}

      {/* <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            padding: "8px 16px",
            fontSize: "0.875rem",
            height: "40px",
            borderRadius: "8px",
          },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: "100%", backgroundColor: "#ade0f4", color: "gray" }}
        >
          Navigate to X website and scroll down to see to see X-Factors in
          action
        </Alert>
      </Snackbar> */}
    </>
  );
}
