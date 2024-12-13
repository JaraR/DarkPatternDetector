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
import notification from "/public/icons/notification.png";
import ads from "/public/icons/ads.png";
import tooltipAutoplay from "../../assets/tooltip-autoplay.png";
import tooltipAds from "../../assets/tooltip-ads.png";
import tooltipNotif from "../../assets/tooltip-notif.png";
import ReadingTimer from "@/components/custom/ReadingTimer";

// import CustomizationCard from "@/components/ui/CustomizationCard";

// import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import BottomNavigation from "./BottomNavigation";

// "const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });"

// eslint-disable-next-line react/prop-types
export default function SettingTest() {
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isPromotedAds, setIsPromotedAds] = useState(false);
  const [isEngagementNotif, setIsEngagementNotif] = useState({});
  const [isInfiniteScroll, setIsInfiniteScroll] = useState({});

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

    chrome.tabs.onRemoved.addListener(handleTabClose);

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
    setIsPromotedAds(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["promotedAds"], (result) => {
        setIsPromotedAds(result.promotedAds);
      });
    }
    const storageListener = (changes, areaName) => {
      if (areaName === "sync" && changes.promotedAds) {
        setIsPromotedAds(changes.promotedAds.newValue);
      }
    };
    chrome.storage.onChanged.addListener(storageListener);

    const handleTabClose = () => {
      setIsPromotedAds(false);
      chrome.storage.sync.set({ promotedAds: false });
    };
    return () => {
      chrome.tabs.onRemoved.removeListener(handleTabClose);
      chrome.storage.onChanged.removeListener(storageListener);
    };
  }, []);

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
    const storageListener = (changes, areaName) => {
      if (areaName === "sync" && changes.engagementNotif) {
        setIsEngagementNotif(changes.engagementNotif.newValue);
      }
    };
    chrome.storage.onChanged.addListener(storageListener);

    const handleTabClose = () => {
      setIsEngagementNotif(false);
      chrome.storage.sync.set({ engagementNotif: false });
    };
    return () => {
      chrome.tabs.onRemoved.removeListener(handleTabClose);
      chrome.storage.onChanged.removeListener(storageListener);
    };
  }, []);

  // infinite Scroll detection
  const startInfiniteScrollDetection = (e) => {
    if (chrome.storage) {
      chrome.storage.sync.set({ infiniteScroll: e });
    }
    setIsInfiniteScroll(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["infiniteScroll"], (result) => {
        setIsInfiniteScroll(result.infiniteScroll || false); // set default value to false
      });
    }
    const storageListener = (changes, areaName) => {
      if (areaName === "sync" && changes.infiniteScroll) {
        setIsInfiniteScroll(changes.infiniteScroll.newValue);
      }
    };

    chrome.storage.onChanged.addListener(storageListener);

    const handleTabClose = () => {
      setIsInfiniteScroll(false);
      chrome.storage.sync.set({ infiniteScroll: false });
    };

    chrome.tabs.onRemoved.addListener(handleTabClose);

    return () => {
      chrome.tabs.onRemoved.removeListener(handleTabClose);
      chrome.storage.onChanged.removeListener(storageListener);
    };
  }, []);

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
            <Checkbox
              id="infinite-scroll"
              checked={isInfiniteScroll}
              onCheckedChange={startInfiniteScrollDetection}
            />
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
      <ReadingTimer />
      <BottomNavigation />
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
