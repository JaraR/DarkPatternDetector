import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ButtonLink } from "@/components/ui/buttonlink"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <>
      <Tabs defaultValue="results" className="w-[400px]">
        <TabsList>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="about-us">About Us</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="results">
          <div>
            <div>
              <p>Placeholder for Total # DP detected</p>
              <p>Dark Patterns Detected</p>
            </div>
            <div>
              <p>Emotional Steering <ButtonLink to="/EMLSettings">EML Settings</ButtonLink></p>
              <p>Infinite Scrolling
                <Button aschild>
                  <Link to="/infinitescrollingsettings">IFSettings</Link>
                </Button>
              </p>
              <p>Autoplay Videos <ButtonLink to="/autoplaysettings">APSettings</ButtonLink>
              </p>
              <p>Privacy Zuckering</p>
              <p>Engagement Notification</p>
              <p>Obstructing</p>
              <p>Promoted Tweets and Ads that Blend In</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="about-us">
          <section>
            <div>
              <h2>What does this detection tool do?</h2>
              <p>This tool detects dark patterns on X/Twitter.</p>
            </div>
            <div>
              <h2>What are dark patterns?</h2>
              <p className="font-change">"Dark patterns are tricks used in websites and apps that make you do things that you didn't mean to, 
                like buying or signing up for something." - <a href="https://www.deceptive.design">https://www.deceptive.design</a></p>
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
                <AccordionTrigger>Promoted Tweets and Ads that Blend In</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </TabsContent>
        <TabsContent value="settings">hello world!</TabsContent>
      </Tabs>
    </>
  )
}
