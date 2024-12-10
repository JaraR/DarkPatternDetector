import React, { useState, useEffect } from "react";
import { StopwatchIcon } from "@radix-ui/react-icons";
import Card from "@mui/material/Card";
import { Button, CardContent } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

export default function ReadingTimer() {
  const [timerOn, setTimerOn] = useState(false); // Timer running state
  const [startTime, setStartTime] = useState(null); // Start time
  const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in seconds
  const [tabsParams, setTabsParams] = useState({ title: "", favIconUrl: "" }); // Store the title and favicon

  // Toggles the timer on/off
  const handleTimerToggle = () => {
    if (!timerOn) {
      // Start timer
      setStartTime(Date.now()); // Record start time
      setElapsedTime(0); // Reset elapsed time when starting
      setTimerOn(true);
    } else {
      // Stop timer
      setTimerOn(false);
    }
  };

  useEffect(() => {
    let timerInterval = null;

    if (timerOn) {
      timerInterval = setInterval(() => {
        const currentElapsed = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(currentElapsed);
      }, 1000);
    } else {
      // When timer stops, clear the interval
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    }

    return () => {
      // Clear the interval when the component is unmounted or timer is stopped
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [timerOn, startTime]); // Effect only runs when `timerOn` or `startTime` changes

  // Format elapsed time into minutes and seconds
  const formatElapsedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Fetch tab info when component mounts
  useEffect(() => {
    // Fetch the current tab's information (title and favicon)
    const fetchTabInfo = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (currentTab) {
          setTabsParams({
            title: currentTab.title,
            favIconUrl: currentTab.favIconUrl,
          });
        }
      });
    };

    fetchTabInfo();

    // Optionally, you can listen for changes in the tab
    chrome.tabs.onUpdated.addListener(fetchTabInfo);

    return () => {
      chrome.tabs.onUpdated.removeListener(fetchTabInfo);
    };
  }, []);

  return (
      <Card
          sx={{
            maxWidth: 400,
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
            marginTop: 2,
          }}
      >
        <CardHeader
            avatar={
              <StopwatchIcon className="size-7" />
            }
            title={
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#004080" }}>
                Scroll Timer
              </Typography>
            }
            subheader={
              <Typography variant="body2" sx={{ color: "#0177CC" }}>
                Keep track of your scrolling habits
              </Typography>
            }
        />

        <CardContent>
          {/*Container div for Favicon, time information, and Timer button, ensuring they display in the same row*/}
          <div className="flex items-center space-x-4 mb-4 justify-start">
            {/* Favicon icon */}
            {tabsParams.favIconUrl && (
                <img
                    src={tabsParams.favIconUrl}
                    alt="Tab Favicon"
                    width={32}
                    height={32}
                    style={{borderRadius: "50%"}} // Display Favicon as a circle
                />
            )}

            {/* Time information: Start Time and Elapsed Time */}
            <div>
              <Typography variant="body2" sx={{color: "black"}}>
                <strong>Start Time:</strong> {startTime ? new Date(startTime).toLocaleTimeString() : "-"}
              </Typography>
              <Typography variant="body2" sx={{color: "black"}}>
                <strong>Elapsed Time:</strong> {formatElapsedTime(elapsedTime)}
              </Typography>
            </div>

            {/* Timer button with smaller size */}
            <Button
                onClick={handleTimerToggle}
                variant="contained"
                size="small"  // Reduce button size
                sx={{
                  backgroundColor: timerOn ? "#0177CC" : "#B0B0B0", // Blue when started, gray when stopped
                  color: "white",
                }}
            >
              {timerOn ? "STOP TIMER" : "START TIMER"}
            </Button>
          </div>
        </CardContent>
      </Card>
  );
}
