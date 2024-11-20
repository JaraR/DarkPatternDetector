import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import obstructionIcon from "/public/icons/obstruction.png";
import emotionIcon from "/public/icons/emotion.png";
import autoplayIcon from "/public/icons/autoplay.png";
import adsIcon from "/public/icons/ads.png";
import infiniteIcon from "/public/icons/infinite.png";
import notificationIcon from "/public/icons/notification.png";
import privacyIcon from "/public/icons/privacy.png";

export default function AboutUsTab() {
  return (
    <section className="m-5">
      <div>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          What are dark patterns?
        </p>
        <p className="font-change" style={{ fontSize: "14px" }}>
          Dark patterns are tricks used in websites and apps that make you do
          things that you didn't mean to.
        </p>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          7 dark patterns X-Factors can detect
        </p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={emotionIcon}
                alt="Emotion Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Emotional Steering
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Using language and images to steer users' emotion.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={adsIcon}
                alt="Ads Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Promoted Ads
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Ads that are displayed with a subtle "AD" label and redirect users
            to a different page.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="3">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            {" "}
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={autoplayIcon}
                alt="Autoplay Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Autoplay
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Videos that play automatically without user consent.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="4">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={infiniteIcon}
                alt="Infinite Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Infinite Scrolling
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Continuously presenting content without clear stopping points.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="5">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={notificationIcon}
                alt="Notification Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Engagement Notification
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Displaying notifications to prompt immediate interaction.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="6">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={privacyIcon}
                alt="Privacy Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Privacy Zuckering
            </span>
          </AccordionTrigger>
          <AccordionContent>
            The practice of misleading users into sharing more information than
            they intend to.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="7">
          <AccordionTrigger style={{ fontSize: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={obstructionIcon}
                alt="Obstruction Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Obstruction
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Intentionally making it difficult for users to perform an action.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
