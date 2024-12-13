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
        "What It Is: These preferences enable X to tailor ads, timelines, and suggestions based on your on-platform activities and even data from partnered websites and advertisers.",
        "Why It Matters: While personalization can seem convenient, it also means that more of your browsing habits, interests, and even off-site actions are connected to your account.",
      ],
    },
    {
      id: 2,
      title: "Location Data Sharing",
      text: "To disable location data sharing:",
      steps: [
        "What It Is: By enabling precise location sharing, your posts may include detailed geographic data about where you are.",
        "Why It Matters: This can unintentionally reveal your home, workplace, or regular hangouts to followers and the broader public."
      ],
    },
    {
      id: 3,
      title: "Data Sharing with Business Partners",
      text: "To opt out of data sharing with business partners:",
      steps: [
        "What It Is: These preferences enable X to tailor ads, timelines, and suggestions based on your on-platform activities and even data from partnered websites and advertisers.",
        "Why It Matters: While personalization can seem convenient, it also means that more of your browsing habits, interests, and even off-site actions are connected to your account.",
      ],
    },
    {
      id: 4,
      title: "Discoverability via Email/Phone",
      text: "To disable discoverability by email or phone:",
      steps: [
        "What It Is: If you allow your account to be found by people who have your email address or phone number, new contacts and acquaintances can locate you more easily.",
        "Why It Matters: This can blur the line between your professional life, personal circle, and public profile, making it simpler for others to identify and track you.",
      ],
    },
    {
      id: 5,
      title: "Photo Tagging & Facial Recognition",
      text: "Photo Tagging & Facial Recognition",
      steps: [
        "What It Is: If photo tagging is enabled, others can tag you in images—sometimes even if you don’t follow them. Some settings may allow X to scan images for recognizable patterns.",
        "Why It Matters: Uncontrolled tagging can link you to events, locations, or social circles you’d rather keep private, and can unintentionally build a visual record of your social graph.",
      ],
    },
  ];

  return (
    <Carousel className="w-full max-w-full" plugins={[Autoplay({delay: 5000})]}>
      <CarouselContent>
        {tips.map((tip) => (
          <CarouselItem key={tip.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <h2 className="text-lg font-bold">{tip.title}</h2>
                  <p className="text-sm">{tip.text}</p>
                  <ol className="list-inside space-y-1 text-sm">
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
