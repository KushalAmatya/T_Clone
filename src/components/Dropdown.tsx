import { Dispatch } from "react";

type DropdownProps = {
  setHover: Dispatch<boolean>;
  carLinks: string[];
  carImage?: { src: string; alt: string; text: string }[];
  styleName?: string;
  height?: string;
};

export const Dropdown = ({
  setHover,
  carLinks,
  carImage = [],
  styleName = "",
  height = "",
}: DropdownProps) => {
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`pt-6 absolute -translate-y-2 bg-white w-full h-[450px] top-[50px] left-[50%] transform translate-x-[-50%] rounded-lg transition-all !h-[${height}]`}
    >
      <div className="flex justify-between">
        <div className={`pl-[125px] pr-[50px] pt-[80px] ${styleName}`}>
          <ul className="grid grid-cols-4 gap-3">
            {/* Only render images if carImage is not null and has items */}
            {carImage && carImage.length > 0 ? (
              carImage.map((item, index) => (
                <li key={index}>
                  <img src={item.src} alt={item.alt} />
                  <p className="text-black pl-[75px] !min-w-32">{item.text}</p>
                </li>
              ))
            ) : (
              <span></span>
            )}
          </ul>
        </div>
        <div className="border-l-2 border-black">
          <ul className="ml-[100px] flex flex-col justify-evenly gap-3 pr-[300px] pt-[50px]">
            {carLinks.map((item, index) => (
              <li key={index} className="text-black w-48">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
