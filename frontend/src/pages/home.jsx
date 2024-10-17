import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InfiniteScrolling from './infiniteScrolling';

export function Home() {
    return (
        <>
            <Tabs defaultValue="results" className="w-[400px] home-tabs">
                <TabsList className="results-tabs-list">
                    <TabsTrigger value="results">Results</TabsTrigger>
                    <TabsTrigger value="about-us">About Us</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="results" className="results-tabs-content">
                    <div>
                        <div>
                            <p>Placeholder for Total # DP detected</p>
                            <p>Dark Patterns Detected</p>
                        </div>
                        <div>
                            <p>Emotional Steering</p>
                            <InfiniteScrolling />
                            <p>Autoplay Videos</p>
                            <p>Privacy Zuckering</p>
                            <p>Engagement Notification</p>
                            <p>Obstructing</p>
                            <p>Promoted Tweets and Ads that Blend In</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="about-us" className="results-tabs-content">
                    <section>
                        <div>
                            <h2>What does this detection tool do?</h2>
                            <p>This tool detects dark patterns on X/Twitter.</p>
                        </div>
                        <div>
                            <h2>What are dark patterns?</h2>
                            <p className="font-change">
                                "Dark patterns are tricks used in websites and apps that make you do things that you didn't mean to, like buying or signing up
                                for something." - <a href="https://www.deceptive.design">https://www.deceptive.design</a>
                            </p>
                        </div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Emotional Steering</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Infinite Scrolling</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Autoplay Videos</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Privacy Zuckering</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Engagement Notification</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Obstructing</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>Promoted Tweets and Ads that Blend In</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </TabsContent>
                <TabsContent value="settings" className="results-tabs-content">
                    hello world!
                </TabsContent>
            </Tabs>
        </>
    );
}
