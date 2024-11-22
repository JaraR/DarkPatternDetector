import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutUsTab() {
  return (
    <section className="m-5">
      <div>
        <p style={{ fontWeight: "bold" }}>What does this detection tool do?</p>
        <p>This tool detects dark patterns on X/Twitter.</p>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>What are dark patterns?</p>
        <p className="font-change">
          "Dark patterns are tricks used in websites and apps that make you do
          things that you didn't mean to, like buying or signing up for
          something." -{" "}
          <a href="https://www.deceptive.design">
            https://www.deceptive.design
          </a>
        </p>
        <p style={{ fontWeight: "bold" }}>
          7 dark patterns X-factors can detect
        </p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Emotional Steering</AccordionTrigger>

          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Infinite Scrolling</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Autoplay Videos</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Privacy Zuckering</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Engagement Notification</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Obstructing</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Promoted Tweets and Ads that Blend In
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
