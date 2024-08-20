import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./container/Hero";
import tesla2 from "./assets/tesla2.jpg";
import tesla3 from "./assets/tesla3.jpg";
import cybertruck from "./assets/cybertruck.png";
import { Terms } from "./container/Terms";

const hero = [
  {
    title: "Tesla Model 3",
    description: "1.99% APR Financing Ending August 31",
    price: 69420,
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png",
  },
  {
    title: "Tesla Model S",
    description: "1.99% APR Financing Ending August 31  ",
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
    titleImage: cybertruck,
    title: "",
    description: "",
    price: undefined,
    image:
      "https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg",
  },
  {
    title: "Solar Panel",
    description: "Schedule a Virtual Consultation",
    price: undefined,
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop",
  },
  {
    title: "Solar Roof",
    description: "Produce Clean Energy From Your Roof",
    price: undefined,
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png",
  },
  {
    title: "Powerwall",
    description: "",
    price: undefined,
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png",
  },
  {
    title: "Accessories",
    description: "",
    price: undefined,
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-US.png",
  },
];

const termsVal = [
  {
    id: 1,
    description:
      "Price before estimated savings is $44,130, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $5,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive and leases not eligible for the Federal Tax Credit. Terms apply.",
  },
  {
    id: 2,
    description:
      " Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.",
  },
  {
    id: 3,
    description:
      "Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.",
  },
  {
    id: 4,
    description:
      " rice before estimated savings is $76,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in gas savings estimated over five years and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.",
  },
];

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [topNavbar, setTopNavbar] = useState(true);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      setTopNavbar(true);
    } else {
      setTopNavbar(false);
    }
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {showNavbar && (
        <div className={`transition-all ease-in duration-1000 }`}>
          <Navbar showNavbar={showNavbar} topNavbar={topNavbar} />
        </div>
      )}

      {hero.map((item, index) => {
        return (
          <Hero
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            titleImage={item.titleImage}
          />
        );
      })}
      {termsVal.map((item, index) => {
        return (
          <Terms key={index} id={item.id} description={item.description} />
        );
      })}
    </>
  );
}

export default App;
