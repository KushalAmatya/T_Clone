import { Navbar } from "./components/Navbar";
import { Hero } from "./container/Hero";
// import tesla1 from "./assets/tesla1.jpg";
import tesla2 from "./assets/tesla2.jpg";
import tesla3 from "./assets/tesla3.jpg";
const hero = [
  {
    title: "Tesla Model 3",
    description: "Order Online for",
    price: 69420,
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png",
  },
  {
    title: "Tesla Model S",
    description: "Order Online for",
    price: 69420,
    image: tesla2,
  },
  {
    title: "Tesla Model Y",
    description: "Order Online for",
    price: 69420,
    image: tesla3,
  },
  {
    title: "Tesla Cybertruck",
    description: "Order Online for",
    price: 69420,
    image:
      "https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title={hero[0].title}
        description={hero[0].description}
        price={hero[0].price}
        image={hero[0].image}
      />
      <Hero
        title={hero[1].title}
        description={hero[1].description}
        price={hero[1].price}
        image={hero[1].image}
      />
      <Hero
        title={hero[2].title}
        description={hero[2].description}
        price={hero[2].price}
        image={hero[2].image}
      />
      <Hero
        title={hero[3].title}
        description={hero[3].description}
        price={hero[3].price}
        image={hero[3].image}
      />
    </>
  );
}

export default App;
