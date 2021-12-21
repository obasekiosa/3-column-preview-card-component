import './App.scss';
import sedansIcon from "./assets/images/icon-sedans.svg";
import luxuryIcon from "./assets/images/icon-luxury.svg";
import suvsIcon from "./assets/images/icon-suvs.svg";
import { PreviewCard } from "./components/components";

function App() {
  const data = [
    {
      title: "Sedans",
      icon: sedansIcon,
      text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      color: "hsl(31, 77%, 52%)"
    },
    {
      title: "SUVs",
      icon: suvsIcon,
      text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off- road adventures.",
      color: "hsl(184, 100%, 22%)"
    },
    {
      title: "Luxury",
      icon: luxuryIcon,
      text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      color: "hsl(179, 100%, 13%)"
    }
  ]

  return (
    <div className="App">
      {
        data.map(e => <PreviewCard key={e.title} text={e.text} title={e.title} icon={e.icon} color={e.color}/> )
      }
    </div>
  );
}

export default App;
