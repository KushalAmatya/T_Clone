import { ZoomInIcon, GlobeIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const Navbar = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={`flex justify-between pt-[20px] fixed top-0 bg-white/[0.01]  w-full transition ${
        hover && "!bg-white"
      }`}
    >
      <div className="pl-12">
        <p>TESLA</p>
        {/* <svg>
          <path
            width={100}
            fill="white"
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
          ></path>
        </svg> */}
      </div>
      <div>
        <ul className={`flex gap-6 text-white ${hover && "text-black"}`}>
          <div>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
            >
              Vehicle
            </li>
            {hover && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="pt-6 absolute -translate-y-2 bg-white w-full h-[400px] top-[50px] left-[50%] transform translate-x-[-50%] rounded-lg"
              >
                <div className="flex justify-between">
                  <div className="pl-[125px]">
                    <ul className="grid grid-cols-4 gap-3">
                      <li>
                        <img
                          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
                          alt="t1"
                          className="w-[212px] h-[119px]"
                        />
                        <p className="ml-[75px]">Model S</p>
                      </li>
                      <li>
                        <img
                          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png"
                          alt=""
                          className="w-[212px] h-[119px]"
                        />
                        <p className="ml-[75px]">Model 3</p>
                      </li>
                      <li>
                        <img
                          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
                          alt=""
                          className="w-[212px] h-[119px]"
                        />
                        <p className="ml-[75px]">Model X</p>
                      </li>
                      <li>
                        <img
                          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
                          alt=""
                          className="w-[212px] h-[119px]"
                        />
                        <p className="ml-[75px]">Model Y</p>
                      </li>
                      <li></li>
                      <li>
                        <img
                          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
                          alt=""
                          className="w-[212px] h-[119px]"
                        />
                        <p className="ml-[75px]">Cybertruck</p>
                      </li>

                      <li>
                        <img
                          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png
"
                          alt=""
                          className="w-[212px] h-[119px]"
                        />
                        <p className="ml-[65px]">Help Us Choose</p>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-black">
                    <ul className="ml-[100px] flex flex-col gap-3 pr-[300px] ">
                      <li>Inventory</li>
                      <li>Used Cars</li>
                      <li>Demo Drive</li>
                      <li>Trade-in</li>
                      <li>Compare</li>
                      <li>Help Me Charge</li>
                      <li>Fleet</li>
                      <li>Semi</li>
                      <li>Roadster</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discover</li>
          <li>Shop</li>
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
              className={`text-white ${hover && "text-black"}`}
            />
          </li>
          <li>
            <GlobeIcon
              width={25}
              height={25}
              className={`text-white ${hover && "text-black"}`}
            />
          </li>
          <li>
            <PersonIcon
              width={25}
              height={25}
              className={`text-white ${hover && "text-black"}`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
