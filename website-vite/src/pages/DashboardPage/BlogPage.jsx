import amazon from "../../assets/amazon.png";
import FOMO from "../../assets/FOMO.png";
import mental from "../../assets/mental.png";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export default function Types() {
  const cardsData = [
    {
      id: 1,
      title:
        "Unsubscribing from Amazon Prime: How 'Dark Patterns' Make It Difficult",
      image: amazon,
      description:
        "Amazon uses dark patterns like obstruction, confirmshaming, and misdirection to make unsubscribing from Prime difficult, pressuring users to stay subscribed.",
      borderColor: "border-pink-400",
    },
    {
      id: 2,
      title:
        "How Social Media Use 'Engagement Notifications' to Keep You Hooked",
      image: FOMO,
      description:
        "Platforms like Facebook, Instagram, and Twitter use engagement notifications as a dark pattern to exploit FOMO, keeping users hooked and increasing screen time and addictive behaviors.",
      borderColor: "border-blue-700",
    },
    {
      id: 3,
      title: "How Dark Patterns in Digital Design Are Impacting Mental Health",
      image: mental,
      description:
        "Over time, these patterns can contribute to increased stress, depression, and even addictive behavior, as users feel compelled to stay online, sacrificing their real-world connections and emotional well-being",
      borderColor: "border-yellow-600",
    },
  ];

  return (
    <div className="flex flex-col items-center text-left w-full h-full mt-4 px-4">
      {/* Header */}
      <div className="max-w-3xl text-center font-bold text-white mb-6">
        <h1 className="mb-4 text-4xl flex items-center justify-center text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
          X-Factors Blog
        </h1>
        <div className="flex justify-center mb-4">
          <button className="flex items-center justify-center px-4 py-2 text-sm text-white rounded-md bg-gradient-to-r from-purple-500 to-blue-500">
            <RssFeedIcon className="mr-2 text-base" />
            <span>RSS FEED</span>
          </button>
        </div>
        <span>
          Raising Awareness About Dark Patterns in Digital Design on Social
          Media
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`max-w-sm w-full p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${card.borderColor} border-2`}
          >
            <div
              className="h-48 w-full bg-cover rounded-lg"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold">{card.title}</h5>
              <p className="text-sm text-gray-600 text-center mt-2">
                {card.description}
              </p>
            </div>
            <div className="mt-4 text-gray-400 text-sm">
              {new Date().toLocaleString("default", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
