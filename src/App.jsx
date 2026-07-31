import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  const [count, setcount] = useState(0);
  const animechars = [
    {
      img: "https://w0.peakpx.com/wallpaper/712/885/HD-wallpaper-kaido-wano-anime-luffy-one-piece-manga.jpg",
      name: "Monkey D. Luffy",
      line: "Gonna become the king of the pirates",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/440/254/HD-wallpaper-sage-naruto-naruto-shippuden-pain-sage-mode-naruto-shounen.jpg",
      name: "Uzumaki Naruto",
      line: "I am gonna be the Hokage Oneday",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/898/1022/HD-wallpaper-attack-on-titan-eren-yeager.jpg",
      name: "Eren Yeager",
      line: "If you win you live, If you lose you die, but if you don't fight you'll never wine",
    },
    {
      img: "https://wallpapercave.com/wp/wp3601063.jpg",
      name: "Ichigo Kurosaki",
      line: "Just stay alive till I arrive, when I arrive, I'll handle everything",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Props Drilling</h1>
      <div className="Parent-div">
        {animechars.map(function (elem, id) {
          return (
            <Card key={id} name={elem.name} line={elem.line} img={elem.img} />
          );
        })}
      </div>
      <h1 className="text-6xl font-bold text-center mt-27">Counter</h1>
      <div className="bg-teal-800 h-60 flex flex-col items-center">
      <h1 className="text-4xl font-bold">count : {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
        className="border-2 rounded w-20 h-10 mt-20"
      >
        Inc
      </button>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
        className="border-2 rounded w-20 h-10 mt-2"
      >
        Dec
      </button>
      </div>
      <h1 className="text-6xl font-bold text-center mt-27">Form handling/ Two way Data binding</h1>
      <div className="h-90 bg-gray-900">
        <Form />
      </div>
    </>
  );
};

export default App;
