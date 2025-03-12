import Footer from "../../../components/Footer";
import Banner from "../../../components/Banner";
import Subscription from "../../../components/Subscription";

export default function SamplePage() {
  return (
    <>
      <main className="bg-gray-700 w-screen min-h-screen">
        <div>
          <div className="mx-5 sm:mx-10">
            <div className="pt-10">
              <a href="/" className="text-white font-bold">
                ← Go back to all dark pattern
              </a>
            </div>
            <article className="bg-gray-700 mx-5 sm:mx-10 ">
              <header className="mt-10 px-5 sm:mt-20 sm:px-10 text-center">
                <h1 className="font-bold text-white text-3xl sm:text-4xl">
                  How Promoted Ads Implemented and Detected on X
                </h1>
                <div className="mx-5 sm:mx-40 my-10 text-white">
                  <h2 className="text-lg font-bold my-10 text-start">
                    TakeAway:
                  </h2>
                  <ul className="space-y-5 text-start break-words">
                    <li>
                      1.Lorem ipsum dolor sit amet: Consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li>
                      2.Ut enim ad minim veniam: Quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      3.Duis aute irure dolor in reprehenderit: In voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
              </header>

              <div className="sticky bg-gray-600 grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-10 rounded-md text-white">
                <div className="sm:col-span-1">
                  <div className="bg-gray-500 rounded ml-5 sm:ml-10 mt-5 sm:mt-10 p-5 break-words">
                    <h3 className="mb-10 font-bold">This article contains:</h3>
                    <ul className="space-y-5">
                      <li>1. Introduction</li>
                      <li>2. How Promoted Ads Detection is Implemented on X</li>
                      <li>3. How to Detect Promoted Ads on X</li>
                      <li>4. How X-Factors can help</li>
                      <li>5. Conclusion</li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-y-auto max-h-screen sm:col-span-3">
                  <section className="space-y-10 mx-5 sm:mx-20 my-5 sm:my-10 text-justify">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">
                      Introduction
                    </h2>
                    <p className="text-white">
                      Promoted Ads are a type of dark pattern that manipulates
                      user behavior by embedding advertisements into users'
                      feeds during scrolling, making it difficult for users to
                      notice that these are actually ads. These ads often
                      redirect users to third-party websites without their
                      consent. This article will explore how promoted ads are
                      embedded on X, their implementation, and how X-Factors can
                      help you detect these ads.
                    </p>
                    <p className="text-white">
                      Promoted ads are a common feature on social media
                      platforms X. They are designed to look like regular posts,
                      but are actually paid advertisements that are targeted at
                      specific users based on their interests and online
                      behavior. Promoted ads on X are often labeled as "Ad" to
                      indicate that they are paid content, but the labels are
                      very small with very low contrast and easy to miss.
                    </p>
                    <p className="text-white">
                      Promoted ads are designed to blend in with the rest of the
                      content on the platform, making them difficult to
                      distinguish from regular posts. This can make it difficult
                      for users to recognize when they are being shown an
                      advertisement, leading them to engage with the content
                      without realizing that it is paid promotion.
                    </p>
                    <h2 className="text-white font-bold text-xl sm:text-2xl">
                      How Promoted Ads Detection is Implemented on X
                    </h2>
                    <p className="text-white">
                      Promoted ads on X are implemented using MutationObserver
                      to motitor content on X, which is loaded dynamically.
                      Initially we used Polling to motitor contents however, it
                      has some latency, therefore we switched to
                      MutationObserver; Secondlly, we target ads label by
                      querySelectorAll and create element to blur the ads;
                      Thirdly, we target the link in the ads element to inject
                      confirmation popup to remind users that this link will
                      redirect you to the third party Website.
                    </p>

                    <h2 className="text-white font-bold text-xl sm:text-2xl">
                      How X-Factors Can Help to Detect Promoted Ads on X
                    </h2>
                    <p className="text-white">
                      For Promoted ads detection on X, user could enable the
                      promoted ads detection on setting page, and navigate to
                      the X website. When user scroll down the page, the
                      promoted ads will be detected and blurred with a label
                      "Ad" on the top right corner being highlighted. User could
                      hover on the ads to view the content, and a confirmation
                      popup will be shown when user click on the ads, to remind
                      user that this link will redirect you to the third party
                      Website.
                    </p>

                    <h2 className="text-white font-bold text-xl sm:text-2xl">
                      Future Works
                    </h2>
                    <p className="text-white">
                      The chanllege to detect the promoted ads on X is that the
                      deeply nested tag hiarchy and the dynamic ads tags, some
                      are labeled and some are not. Therefore, it would be
                      diffuclt to detect the ads with unlabled ads.The current
                      implementation works on X website and bluesky; In the
                      future, we will extend the detection to other websites and
                      improve the detection compatibility.
                    </p>
                  </section>
                </div>
              </div>
            </article>
            <Subscription />
          </div>
        </div>

        <Banner />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
