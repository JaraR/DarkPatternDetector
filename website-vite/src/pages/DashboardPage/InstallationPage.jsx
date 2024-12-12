import chromeLogo from "../../assets/chrome-logo.png";
import macPreview from "../../assets/mac.png";
import autoplayHeader from "../../assets/autoplay-header.png";
import adsHeader from "../../assets/ad-header.png";
import tutorial from "../../assets/tutorial.png";
import notificationHeader from "../../assets/notification-header.png";
import emlHeader from "../../assets/eml-header.png";

export default function Installation() {
  return (
    <div className="flex flex-wrap justify-center gap-6 relative">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center w-full gap-6">
        <div className="flex flex-col items-center px-4">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400 text-2xl md:text-4xl font-bold p-2 md:p-4">
            Install Our Dark Pattern Detector <br />
            X-Factors
          </h2>
          <button className="mt-4 text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 bg-blue-500 hover:bg-blue-700 flex items-center">
            <img
              src={chromeLogo}
              alt="Chrome Logo"
              className="w-5 h-5 md:w-6 md:h-6 mr-2"
            />
            Get X-Factors for Chrome
          </button>
        </div>
        <div className="flex justify-center w-full md:w-4/5 mt-4 md:mt-6">
          <img
            src={macPreview}
            alt="Mac Preview"
            className="max-w-full w-full md:w-auto"
          />
        </div>
      </div>

      {/* Tutorial Section */}
      <div className="px-4">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-xl md:text-3xl font-bold p-2 md:p-4">
          Tutorial and Walkthrough Our Chrome Extension
        </h2>
        <img
          src={tutorial}
          alt="Tutorial Header"
          className="w-full max-w-md md:max-w-xl mx-auto p-2 md:p-4"
        />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 text-2xl md:text-4xl font-bold p-2 md:p-4">
          What X-Factors Can Do for You
        </h2>
      </div>

      {/* Features Sections */}
      <div className="flex flex-wrap justify-around items-center gap-6 px-4">
        {/* EML */}
        <div className="flex flex-col-reverse justify-center md:flex-row items-center w-full md:w-[90%] lg:w-[80%] mx-auto py-4 md:py-6">
          <h2 className="pr-10 text-transparent ml-10 bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-600 text-lg md:text-2xl font-bold text-center">
            Emotional Steering Detection
          </h2>
          <img
            src={emlHeader}
            alt="eml Header"
            // className="w-[100%] md:w-[70%] lg:w-[60%] p-1 md:p-2 shadow-md"
            className="w-[100%] md:w-[90%] lg:w-[80%] p-1 md:p-2 shadow-md"
          />
        </div>
        {/* Autoplay */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-12">
          <img
            src={autoplayHeader}
            alt="Autoplay Header"
            className="w-[100%] md:w-[80%] lg:w-[70%] p-2 md:p-4"
          />
          <h2 className="pl-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-lg md:text-2xl font-bold text-center">
            Autoplay Detection <br />
            <span className="text-sm md:text-lg font-semibold">
              Pause Autoplayed Videos <br />
              Watch on Your Own Terms
            </span>
          </h2>
        </div>

        {/* Promoted Ads */}
        <div className="flex flex-col-reverse md:flex-row items-center w-full md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-12">
          <h2 className=" pr-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 text-lg md:text-2xl font-bold text-center">
            Promoted Ads Detection <br />
            <span className="text-sm md:text-lg font-semibold">
              Spot the Ads <br />
              Navigate with Control
            </span>
          </h2>
          <img
            src={adsHeader}
            alt="Ads Header"
            className="w-[100%] md:w-[80%] lg:w-[70%] p-2 md:p-4"
          />
        </div>

        {/* Engagement Notification */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-12">
          <img
            src={notificationHeader}
            alt="Notification Header"
            className="w-[100%] md:w-[90%] lg:w-[80%] p-2 md:p-4"
          />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 text-lg md:text-2xl font-bold text-center">
            Engagement Notification Detection
          </h2>
        </div>
      </div>
    </div>
  );
}
