import { ZoomInIcon, GlobeIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

type NavbarProps = {
  showNavbar: boolean;
  topNavbar?: boolean;
};
const carImage = [
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
    alt: "t1",
    text: "Model S",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png",
    alt: "",
    text: "Model 3",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
    alt: "",
    text: "Model X",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
    alt: "",
    text: "Model Y",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
    alt: "",
    text: "Cybertruck",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png",
    alt: "",
    text: "Help Us Choose",
  },
];

const carLinks = [
  "Inventory",
  "Used Cars",
  "Demo Drive",
  "Trade-in",
  "Compare",
  "Help Me Charge",
  "Fleet",
  "Semi",
  "Roadster",
];

const energyLinks = [
  "Schedule a Consultation",
  "Why Solar",
  "Incentive",
  "Support",
  "Partner with Tesla",
  "Commercial",
  "Utilities",
];
const energyImage = [
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png",
    alt: "",
    text: "Solar Panels",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png",
    alt: "",
    text: "Solar Roof",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png",
    alt: "",
    text: "Powerwall",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png",
    alt: "",
    text: "Megapack",
  },
];
const chargingLinks = [
  "Help Me Charge",
  "Charging Calculator",
  "Charging With NAcs",
  "Supercharger Voting",
  "Host a Supercharger",
  "Commercial Charging",
  "Host Wall Connectors",
];

const chargingImage = [
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png",
    alt: "",
    text: "Charging",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png",
    alt: "",
    text: "Home Charging",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging.png",
    alt: "",
    text: "Super Charging",
  },
];
const dicoverLinks = [
  "Roadster",
  "Semi",
  "Powerwall",
  "Commercial Solar",
  "Solar Roof",
  "Commercial Energy",
  "Utilities",
  "Find Us",
  "Support",
  "Investor Relations",
  "United States",
  "Privacy & Legal",
  "Careers",
  "News",
  "Events",
  "Contact Us",
  "Shop",
  "Account",
  "More",
];

const shopImage = [
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png",
    alt: "",
    text: "Charging",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png",
    alt: "",
    text: "Vehicle Accessories",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png",
    alt: "",
    text: "Apparel",
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png",
    alt: "",
    text: "Lifestyle",
  },
];
export const Navbar = ({ showNavbar, topNavbar }: NavbarProps) => {
  const [hover, setHover] = useState(false);
  const [energyHover, setEnergyHover] = useState(false);
  const [chargeHover, setChargeHover] = useState(false);
  const [discoverHover, setDiscoverHover] = useState(false);
  const [shopHover, setShopHover] = useState(false);

  const handleshopMouseEnter = () => {
    setShopHover(true);
  };
  const handleshopMouseLeave = () => {
    setShopHover(false);
  };

  const handlediscoverMouseEnter = () => {
    setDiscoverHover(true);
  };
  const handlediscoverMouseLeave = () => {
    setDiscoverHover(false);
  };

  const handlechargeMouseEnter = () => {
    setChargeHover(true);
  };
  const handlechargeMouseLeave = () => {
    setChargeHover(false);
  };
  const handleenergyMouseEnter = () => {
    setEnergyHover(true);
  };
  const handleenergyMouseLeave = () => {
    setEnergyHover(false);
  };
  const handleMouseEnter = () => {
    setHover(true);
    console.log(hover);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={`flex justify-between pt-[20px] z-50 fixed  top-0 pb-4   w-full transition-all duration-100 animate-slideDown ease-in ${
        (energyHover || hover || chargeHover || discoverHover || shopHover) &&
        "!bg-white"
      } ${
        showNavbar
          ? "bg-white text-black transition-all duration-200 ease-in"
          : "bg-white/[0.01]"
      } ${topNavbar && "bg-white/[0.01]"}`}
    >
      <div
        className={`pl-12 ${showNavbar ? "text-black" : "text-white"} ${
          (energyHover || hover || chargeHover || discoverHover || shopHover) &&
          "!text-black"
        } ${topNavbar && "text-white"}`}
      >
        <p className="font-semibold italic">
          <svg
            className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
            width={155}
            height={15}
          >
            <path
              fill="currentColor"
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
            ></path>
          </svg>
        </p>
      </div>
      <div>
        <ul
          className={`flex gap-0 ${showNavbar ? "text-black" : "text-white"} ${
            (energyHover ||
              hover ||
              chargeHover ||
              discoverHover ||
              shopHover) &&
            "!text-gray-950"
          }
          `}
        >
          <div>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex justify-start ${
                showNavbar ? "text-black" : "text-white"
              }
              ${topNavbar && "text-white"} 
              ${
                (energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover) &&
                "!text-gray-950"
              }`}
            >
              <button
                className={`${
                  (energyHover ||
                    hover ||
                    chargeHover ||
                    discoverHover ||
                    shopHover) &&
                  "hover:bg-black/10"
                } px-4 z-50`}
              >
                Vehicle
              </button>
            </li>
            {hover && (
              <Dropdown
                setHover={setHover}
                carLinks={carLinks}
                carImage={carImage}
              />
            )}
          </div>
          <li
            onMouseEnter={handleenergyMouseEnter}
            onMouseLeave={handleenergyMouseLeave}
            className={`flex gap-6 ${showNavbar ? "text-black" : "text-white"} 
            ${topNavbar && "text-white"} 
            ${
              (energyHover ||
                hover ||
                chargeHover ||
                discoverHover ||
                shopHover) &&
              "!text-gray-950"
            }`}
          >
            <button
              className={`${
                (energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover) &&
                "hover:bg-black/10"
              } px-4`}
            >
              Energy
            </button>
          </li>
          {energyHover && (
            <Dropdown
              setHover={setEnergyHover}
              carLinks={energyLinks}
              carImage={energyImage}
              styleName={""}
              height="350px"
            />
          )}
          <li
            onMouseEnter={handlechargeMouseEnter}
            onMouseLeave={handlechargeMouseLeave}
            className={`flex gap-6 ${showNavbar ? "text-black" : "text-white"} 
            ${topNavbar && "text-white"} 
            ${
              (energyHover ||
                hover ||
                chargeHover ||
                discoverHover ||
                shopHover) &&
              "!text-gray-950"
            }`}
          >
            <button
              className={`${
                (energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover) &&
                "hover:bg-black/10"
              } px-4`}
            >
              Charge
            </button>
          </li>
          {chargeHover && (
            <Dropdown
              setHover={setChargeHover}
              carLinks={chargingLinks}
              carImage={chargingImage}
              styleName="!pl-[300px]"
              height="!h-[350px]"
            />
          )}
          <li
            onMouseEnter={handlediscoverMouseEnter}
            onMouseLeave={handlediscoverMouseLeave}
            className={`flex gap-6 ${showNavbar ? "text-black" : "text-white"} 
            ${topNavbar && "text-white"} 
            ${
              (energyHover ||
                hover ||
                chargeHover ||
                discoverHover ||
                shopHover) &&
              "!text-gray-950"
            }`}
          >
            <button
              className={`${
                (energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover) &&
                "hover:bg-black/10"
              } px-4`}
            >
              Discover
            </button>
          </li>
          {discoverHover && (
            <Dropdown
              setHover={setDiscoverHover}
              styleName="!pl-[300px]"
              carLinks={dicoverLinks}
              height="350px"
            />
          )}

          <li
            onMouseEnter={handleshopMouseEnter}
            onMouseLeave={handleshopMouseLeave}
            className={`flex gap-6 ${showNavbar ? "text-black" : "text-white"} 
            ${topNavbar && "text-white"} ${
              (energyHover ||
                hover ||
                chargeHover ||
                discoverHover ||
                shopHover) &&
              "!text-gray-950"
            }`}
          >
            <button
              className={`${
                (energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover) &&
                "hover:bg-black/10"
              } px-4`}
            >
              Shop
            </button>
          </li>
          {shopHover && (
            <Dropdown
              setHover={setShopHover}
              styleName="!pl-[300px]"
              carImage={shopImage}
              height="350px"
            />
          )}
        </ul>
      </div>
      <div className="pr-[52px]">
        <ul
          className="flex gap-2
        "
        >
          <li>
            <ZoomInIcon
              width={25}
              height={25}
              className={`${showNavbar ? "text-black" : "text-white"} 
              ${topNavbar && "text-white"} 
              ${
                (energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover) &&
                "!text-black"
              }`}
            />
          </li>
          <li>
            <GlobeIcon
              width={25}
              height={25}
              color={`  
                 ${
                   energyHover ||
                   hover ||
                   chargeHover ||
                   discoverHover ||
                   shopHover
                     ? "black"
                     : topNavbar
                     ? "white"
                     : showNavbar
                     ? "black"
                     : ""
                 } 
                
                `}
            />
          </li>
          <li>
            <PersonIcon
              width={25}
              height={25}
              color={`  
                ${
                  energyHover ||
                  hover ||
                  chargeHover ||
                  discoverHover ||
                  shopHover
                    ? "black"
                    : topNavbar
                    ? "white"
                    : showNavbar
                    ? "black"
                    : ""
                }
                
                `}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
