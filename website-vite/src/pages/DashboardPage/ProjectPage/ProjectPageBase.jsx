import { Link } from "react-router-dom";
import emotion from "../../../assets/emotion.png";
import privacy from "../../../assets/privacy.png";
import infinite from "../../../assets/infinite.png";
import autoplay from "../../../assets/autoplay.png";
import ads from "../../../assets/ads.png";
import notification from "../../../assets/notification.png";
import obstruction from "../../../assets/obstruction.png";

export default function ProjectPage() {
  const cardsData = [
    {
      id: 1,
      title: "Emotional Steering",
      image: emotion,
      description:
        "The use of wording or visual elements to confer the information in either a highly positive or negative outlook. Influences the user’s emotional state to make an action against their interest.",
      borderColor: "bg-pink-200",
    },
    {
      id: 2,
      title: "Privacy Zuckering",
      image: privacy,
      description:
        "Refers to a term coined by critics to describe the practice where users are misled or manipulated into sharing more personal information than they intend to, often without being fully aware of the consequences.",
      borderColor: "bg-violet-300",
    },
    {
      id: 3,
      title: "Infinite Scrolling",
      image: infinite,
      description:
        "Where users are continuously presented with content without clear stopping points, leading to extended usage. Infinite scrolling could be categorized under patterns that encourage users to spend more time on a platform.",
      borderColor: "bg-blue-100",
    },
    {
      id: 7,
      title: "Autoplay",
      image: autoplay,
      description:
        "Auto-play often falls under the category of manipulative patterns like Bait & Switch or Forced Continuity, which encourage further engagement without giving users an explicit choice to stop. This can extend user session times, making it difficult to disengage from the platform.",
      borderColor: "bg-orange-200",
    },
    {
      id: 4,
      title: "Promoted Ads",
      image: ads,
      description:
        "In X formerly known as twitter the posts that are promoted or sponsored have a very subtle AD written on the top right corner which when a user is skimming through might not register. According to recent reports almost every 3rd or 4th post in users timeline is an advert or a sponsored post that is unsolicited information...",
      borderColor: "bg-purple-200",
    },
    {
      id: 5,
      title: "Engagement Notification",
      image: notification,
      description:
        "Engagement notifications are a type of dark pattern used on social media and websites to manipulate user behavior by creating urgency and prompting immediate interaction. They alert users to new likes, comments, or messages on their content, fostering feelings of social validation and fear of missing out.",
      borderColor: "bg-yellow-200",
    },
    {
      id: 6,
      title: "Obstruction",
      image: obstruction,
      description:
        "Obstruction is a dark pattern that creates obstacles in users' path to make it difficult for them to complete the tasks that they desire. The more complicated and unclear the path it is, the more frustration it causes users, so that users are more likely to give up and choose the path that benefits the company...",
      borderColor: "bg-white",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center mt-8 ">
      <div className="max-w-4xl text-left ml-4">
        <h2 className="text-4xl font-bold mb-4">X-Factors</h2>
        <h3 className="text-2xl mb-4">Project Brief</h3>
        <p className="text-base mb-4">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </p>
        <p className="text-base mb-4">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </p>
        <hr className="my-4" />
        <h3 className="text-2xl mb-4">Final Report</h3>
        <p className="text-xl mb-4">December 2024</p>
        <p className="text-base mb-4">
          Report. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </p>
        <hr className="my-4" />
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-6 mx-5">
        {cardsData.map((card) => (
          <Link
            key={card.id}
            to={`/card/${card.id}`}
            className={`max-w-xs mb-6 p-4 border-2 ${card.borderColor} rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div
              className="w-full h-48 bg-cover rounded-lg"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className="mt-4">
              <h5 className="text-lg text-gray-600 font-semibold">
                {card.title}
              </h5>
              <p className="text-sm h-35 text-gray-600 text-center mt-2">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
