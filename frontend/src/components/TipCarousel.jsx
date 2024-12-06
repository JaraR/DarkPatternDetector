import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function TipCarousel() {
  // Privacy Zuckering Tips with Navigation Steps
  const tips = [
    {
      id: 1,
      title: "Ad Personalization Settings",
      text: "To disable ad personalization:",
      steps: [
        "Go to Settings.",
        "Click on Ads.",
        "Click on Personalization.",
        "Toggle off ad personalization settings.",
      ],
    },
    {
      id: 2,
      title: "Location Data Sharing",
      text: "To disable location data sharing:",
      steps: [
        "Go to Settings.",
        "Click on Privacy and Safety.",
        "Click on Location Data.",
        "Turn off location sharing.",
      ],
    },
    {
      id: 3,
      title: "Data Sharing with Business Partners",
      text: "To opt out of data sharing with business partners:",
      steps: [
        "Go to Settings.",
        "Click on Privacy and Safety.",
        "Select Data Sharing.",
        "Disable sharing with business partners.",
      ],
    },
    {
      id: 4,
      title: "Discoverability via Email/Phone",
      text: "To disable discoverability by email or phone:",
      steps: [
        "Go to Settings.",
        "Click on Privacy and Safety.",
        "Click on Discoverability.",
        "Uncheck options for email and phone.",
      ],
    },
    {
      id: 5,
      title: "Off-Twitter Activity Tracking",
      text: "To stop off-platform activity tracking:",
      steps: [
        "Go to Settings.",
        "Click on Privacy and Safety.",
        "Click on Off-Twitter Activity.",
        "Disable off-platform activity tracking.",
      ],
    },
  ];

  return (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        {tips.map((tip) => (
          <CarouselItem key={tip.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6 space-y-4">
                  <h2 className="text-lg font-bold">{tip.title}</h2>
                  <p className="text-sm">{tip.text}</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    {tip.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
