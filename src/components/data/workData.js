import Shopping from "../assets/works/shopping.png";
import FoodLanding from "../assets/works/foodlanding.png";
import SimonGame from "../assets/works/simongame.png";
import MemorizeGame from "../assets/works/memogame.png";
import FoodRecipie from "../assets/works/foodrecipie.png";
import TicTacToe from "../assets/works/tictactoe.png";
import Dictionary from "../assets/works/dictionary.png";
import Game2048 from "../assets/works/card.png";
import TaillyCounter from "../assets/works/taillycounter.png";
import ToDoList from "../assets/works/todolist.png";
import Weather from "../assets/works/weather.png";
import Calculator from "../assets/works/calculator.png";

const WorkData = [
  {
    id: 1,
    img: Weather,
		name:"Weather App",
    description: "Simple weather app with React JS and API",
    tags: ["react", "API"],

    demo: "https://simple-weather-apps.netlify.app",
    github: "https://github.com/VaxobjanovDev/Simple-Weather-App",
  },
  {
    id: 2,
    img: Calculator,
		name:"Calculator",
    description: "Simple Calculator app with React JS",
    tags: ["react", "grid", "hooks"],

    demo: "https://calculator-simple-app.netlify.app",
    github: "https://github.com/VaxobjanovDev/Calculator",
  },
  {
    id: 3,
    img: ToDoList,
		name:"ToDoList",
    description:"Todolist app posted, updated and deleted functions app with React JS",
    tags: ["react", "hooks"],

    demo: "https://todo-apppractise.netlify.app",
    github: "https://github.com/VaxobjanovDev/To-DoList",
  },
  {
    id: 4,
    img: TaillyCounter,
		name:"Tailly Counter",
    description: "Tailly Counter with a lot of functions.",
    tags: ["react", "hooks"],

    demo: "https://tailly-counter.netlify.app",
    github: "https://github.com/VaxobjanovDev/Counter",
  },
  {
    id: 5,
    img: Dictionary,
		name:"Dictionary",
    description: "Dictionary app you can use 12 languages in it.",
    tags: ["react", "API", "hooks"],

    demo: "https://definitions-app.netlify.app",
    github: "https://github.com/VaxobjanovDev/Dictionary",
  },
  {
    id: 6,
    img: TicTacToe,
		name:"Tic Tac Toe",
    description: "Tic Tac Toe is children's favorite game React JS",
    tags: ["react", "hooks", "JS Function"],

    demo: "https://tic-tac-practise.netlify.app",
    github: "https://github.com/VaxobjanovDev/Tic-Tac-Toe",
  },
  {
    id: 7,
    img: FoodRecipie,
		name:"Food Recipie Search",
    description: "Foof Recipie searcher in EdaMam website.",
    tags: ["react", "hooks", "API"],

    demo: "https://recipies-apps.netlify.app",
    github: "https://github.com/VaxobjanovDev/Food-Recipie-Search-App",
  },
  {
    id: 8,
    img: SimonGame,
		name:"Simon Game",
    description: "Simon Game will improve your memory",
    tags: ["react", "hooks", "JS Functions"],

    demo: "https://simon-games-app.netlify.app",
    github: "https://github.com/VaxobjanovDev/Simon-Game",
  },
  {
    id: 9,
    img: Game2048,
		name:"2048 Game",
    description: "Popular game 2048 with React JS for only Desktop",
    tags: ["react", "hooks", "JS Functions"],

    demo: "https://2048-games.netlify.app",
    github: "https://github.com/VaxobjanovDev/2048-Game",
  },
  {
    id: 10,
    img: MemorizeGame,
		name:"Memo Game",
    description: "Memorize game with React JS",
    tags: ["react", "hooks", "JS Functions"],

    demo: "https://memo-games.netlify.app",
    github: "https://github.com/VaxobjanovDev/Memo-Game",
  },
  {
    id: 11,
    img: FoodLanding,
		name:"Food Landing Page",
    description: "Food Landing Page to Expise studio with React JS",
    tags: ["react", "hooks", "react-slider"],

    demo: "https://food-landing-pages.netlify.app",
    github: "https://github.com/VaxobjanovDev/Food-Landing-Page",
  },
  {
    id: 12,
    img: Shopping,
		name:"E-Commerce website",
    description: "E-commerce site with React JS and Redux",
    tags: ["react", "hooks", "API", "redux"],

    demo: "https://e-commerce-apps.netlify.app",
    github: "https://github.com/VaxobjanovDev/E-commerce",
  },
];

WorkData.reverse()
export default WorkData;
