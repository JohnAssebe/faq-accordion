import "./App.css";
import BGSVGPattern from "./assets/images/background-pattern-desktop.svg";
import FavSVG from "./assets/images/icon-star.svg";
import Accordion from "./components/accordion";
import { questionsArray } from "./data/faq";
function App() {
  return (
    <div className="w-full min-h-screen bg-lightPink">
      <div className="relative font-workSans">
        <img
          src={BGSVGPattern}
          alt="bg-pattern"
          className="object-cover w-full h-full"
        />
        <div className="absolute -translate-x-1/2 bg-white rounded-xl w-[450px] left-1/2 top-[70%] py-4 space-y-3 shadow-xl">
          <div className="flex items-start justify-start w-full px-3 gap-x-3">
            <img src={FavSVG} />
            <h3 className="text-4xl font-bold">FAQS</h3>
          </div>

          {questionsArray.map((ques, _) => (
            <Accordion question={ques.question} answer={ques.answer} key={_} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
