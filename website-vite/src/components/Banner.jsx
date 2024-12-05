import eml from "../assets/emotion.png";
import autoplay from "../assets/autoplay.png";
import noti from "../assets/notification.png";
export default function Banner() {
  return (
    <>
      <div className="bg-gray-600  p-10 ">
        <h2 className="font-bold text-white text-2xl pb-5">
          Related dark patterns
        </h2>
        <div className=" grid grid-cols-3 gap-10 rounded text-white">
          <a
            href="/"
            className=" p-5 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={eml} alt="eml image" className="rounded-lg" />
            <h3 className="font-bold text-lg text-white py-3">
              Emotional Steering
            </h3>
            <p className="text-white">
              Emotional Steering is a dark pattern that manipulates...
            </p>
          </a>
          <a
            href="/"
            className="p-5 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={autoplay} alt="autoplay image" className="rounded-lg" />
            <h3 className="font-bold text-lg text-white py-3">
              Video Autoplay
            </h3>
            <p>Video Autoplay is a dark pattern that manipulates users to...</p>
          </a>
          <a
            href="/"
            className="p-5 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={noti} alt="eml image" className="rounded-lg" />
            <h3 className="font-bold text-lg text-white py-3">
              Engagement Notification
            </h3>
            <p>Engagement Notification is a dark pattern that manipulates...</p>
          </a>
        </div>
      </div>
    </>
  );
}
