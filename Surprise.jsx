export default function GirlfriendSurprisePage() {
  const surprises = [
    {
      title: "A Little Message 💌",
      text: "You make my world brighter every single day. No matter what happens, seeing you smile is my favorite thing in life.",
    },
    {
      title: "Reasons I Adore You 🌸",
      text: "Your laugh, your kindness, your beautiful heart, and the way you make even ordinary moments feel magical.",
    },
    {
      title: "Secret Surprise 🎁",
      text: "Close your eyes for 5 seconds... Now imagine the biggest hug ever. That's from me to you ❤️",
    },
    {
      title: "Future Promise ✨",
      text: "I promise to keep making memories with you, supporting you, and finding new ways to make you smile.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4 animate-bounce">❤️</div>
          <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4">
            For My Beautiful Maddhuu ❤️
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            I made this little surprise page just to remind you, Maddhuu, how special you are to me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {surprises.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold text-rose-700 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-medium text-purple-700 mb-4">
            "You are my favorite notification, favorite smile, and favorite person."
          </p>

          <button
            onClick={() => alert("I love you more than words can explain ❤️")}
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110"
          >
            Click Me 💖
          </button>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          Made with endless love for Maddhuu ✨
        </div>
      </div>
    </div>
  );
}
