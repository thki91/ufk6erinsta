import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const Story = ({
    imagePath,
    description,
    likeName = "lischen",
    dateNo = 2,
    location,
    commentBy,
    commentText,
  }) => {
    const likeMappings = {
      lischen: "/lischen.png",
      grogu: "/grogu.png",
      erbse: "/erbse.png",
    };
    return (
      <div className="mb-10">
        <div className="flex items-center my-3 px-4 text-sm">
          <Link to="/">
            <img src="/profile.png" alt="ufk6er" width="30" height="auto" />
          </Link>
          <Link to="/">
            <div className="ml-3 font-bold">ufk6er</div>{" "}
            <div className="ml-3 text-xs">{location}</div>
          </Link>
        </div>
        <img src={imagePath} alt="Instagram Story" width="100%" />
        <div className="mt-6 px-4 text-sm">
          <div className=" flex items-center">
            <img src={likeMappings[likeName]} alt="Instagram Like" width="30" />{" "}
            <div className="ml-3">
              Gefällt <strong>{likeName}</strong> und{" "}
              {Math.floor(Math.random() * 50) || 12} weiteren Personen
            </div>
          </div>
          <div className="mt-3">
            <strong>ufk6er</strong> {description}
          </div>
          <div className="uppercase text-gray-500 text-xs my-3">
            {dateNo}. Juli
          </div>
          {commentBy && commentText && (
            <div className="border-t border-t-gray-200 flex py-4 items-center">
              <img
                src={likeMappings[commentBy]}
                alt="Instagram Comment"
                width="30"
              />{" "}
              <div className="ml-3">
                <div>
                  <strong>{commentBy}</strong> {commentText}
                </div>
                <div className="text-xs text-gray-400 mt-1">2. Juli, 22:22</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Home = () => {
    return (
      <main className="mt-5 px-4 overflow-y-auto">
        <div className="flex">
          <img src="/profile.png" alt="ufk6er" width="80" height="80" />
          <div className="ml-6">
            <div className="text-2xl">ufk6er</div>
            <div className="border border-gray-300 rounded-sm font-bold text-xs py-1.5 px-3 tracking-wide text-gray-700 mt-3">
              Nachricht senden
            </div>
          </div>
        </div>
        <div className="my-8 text-sm">
          <div className="font-bold">Jürgen Müller</div>
          <div className="text-gray-600">Party Maker</div>
          <div className="">How much is the 🐟? </div>
          Leidenschatlicher beacher, squasher, terraformer ... 💪
          <div className="text-blue-800 flex">
            #unbesiegbar #duracell #ufk6er #übfifalöbel
          </div>
        </div>
        <div className="my-4 border-b border-t border-b-gray-300 border-t-gray-300 py-3 -mx-4 px-10 text-sm text-center flex justify-between">
          <div className="leading-4">
            <div className="font-bold">9</div>
            <div className="text-gray-600">Beiträge</div>
          </div>
          <div className="leading-4">
            <div className="font-bold">1982</div>
            <div className="text-gray-600">Follower</div>
          </div>
          <div className="leading-4">
            <div className="font-bold">19</div>
            <div className="text-gray-600">abonniert</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 -mx-4 mb-10">
          <Link to="/story1">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta1.png"
                className="absolute left-0 -top-5"
                alt="Story 1"
              />
            </div>
          </Link>
          <Link to="/story2">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta2.png"
                className="absolute left-0 top-0"
                alt="Story 2"
              />
            </div>
          </Link>
          <Link to="/story3">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta3.png"
                className="absolute left-0 top-0"
                alt="Story 3"
              />
            </div>
          </Link>
          <Link to="/story4">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta4.png"
                className="absolute left-0 top-0"
                alt="Story 4"
              />
            </div>
          </Link>
          <Link to="/story5">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta5.JPG"
                className="absolute left-0 top-0"
                alt="Story 5"
              />
            </div>
          </Link>
          <Link to="/story6">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta6.png"
                className="absolute left-0 top-0"
                alt="Story 6"
              />
            </div>
          </Link>
          <Link to="/story7">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta7.png"
                className="absolute left-0 top-0"
                alt="Story 7"
              />
            </div>
          </Link>
          <Link to="/story8">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta8.png"
                className="absolute left-0 top-0"
                alt="Story 8"
              />
            </div>
          </Link>
          <Link to="/story9">
            <div className="relative overflow-hidden min-w-32 h-32">
              <img
                src="/insta9.png"
                className="absolute left-0 top-0"
                alt="Story 9"
              />
            </div>
          </Link>
        </div>
      </main>
    );
  };
  return (
    <Router>
      <div className="App">
        <header className="py-3.5 flex justify-between border border-b-gray-300 px-4 sticky top-0 bg-white">
          <Link to="/">
            {" "}
            <img src="/instagram_logo.png" alt="Instagram Logo" width="105" />
          </Link>
          <img src="/profile.png" alt="ufk6er" width="30" height="auto" />
        </header>

        <Routes>
          <Route
            path="/story1"
            element={
              <Story
                imagePath="/insta1.png"
                description="Schweriner Schloss = 9 Frankreich Besuche 😎"
                location="Landtag Mecklenburg-Vorpommern"
              />
            }
          />
          <Route
            path="/story2"
            element={
              <Story
                imagePath="/insta2.png"
                description="Hier ist schön, hier bleiben wir 😊"
                likeName="grogu"
                location="Schweriner Ruderverein"
              />
            }
          />
          <Route
            path="/story3"
            element={
              <Story
                imagePath="/insta3.png"
                description="Rostock oder Schwerin? 🏠"
                likeName="grogu"
                location="Landtag Mecklenburg-Vorpommern"
              />
            }
          />
          <Route
            path="/story4"
            element={
              <Story
                imagePath="/insta4.png"
                description="Steak oder Fisch im Norden? 🤔"
                dateNo={3}
                location="Krebsförden Dorf, Schwerin (Grogu Zuhause)"
              />
            }
          />
          <Route
            path="/story5"
            element={
              <Story
                imagePath="/insta5.JPG"
                description="Da gewinnt er mal 🏆"
                likeName="erbse"
                location="Kanurenngemeinschaft Schwerin (Fauler See)"
              />
            }
          />
          <Route
            path="/story6"
            element={
              <Story
                imagePath="/insta6.png"
                description="Museumsbesuch - Auch mal Kultur erleben"
                likeName="erbse"
                location="Schleifmühle Schwerin"
              />
            }
          />
          <Route
            path="/story7"
            element={
              <Story
                imagePath="/insta7.png"
                description="Viel schöner als der Kölner Dom"
                likeName="grogu"
                location="Pfaffenteich, Schwerin"
              />
            }
          />
          <Route
            path="/story8"
            element={
              <Story
                imagePath="/insta8.png"
                description="Drohnenbildübung und kurze Erfrischung 💦"
                dateNo={3}
                location="Zippendorfer Strand, Schwerin"
              />
            }
          />
          <Route
            path="/story9"
            element={
              <Story
                imagePath="/insta9.png"
                description="Den Mädels scheint es zu gefallen ☀️"
                dateNo={2}
                location="Schweriner Schlossgarten"
                commentBy="grogu"
                commentText="Es gibt mehr als nur das Schloss!"
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
