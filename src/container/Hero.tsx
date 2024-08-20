type HeroProps = {
  title: string;
  description?: string;
  price?: number;
  image: string;
  titleImage?: string;
};

export const Hero = ({
  title,
  description,
  price,
  image,
  titleImage,
}: HeroProps) => {
  return (
    <div
      className="!min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-col flex justify-around gap-[350px] items-center">
        <div className="p-20 text-center text-white">
          {title != "" && (
            <h1 className="text-5xl pt-4 font-bold mt-2 mb-2">{title}</h1>
          )}
          {titleImage && <img src={titleImage} alt="title" />}

          <p className=" mb-2 text-4xl underline">{description}</p>
          {price && <p className="text-3xl">From ${price}</p>}
        </div>
        <div className="text-center text-white flex gap-8 mx-auto items-center">
          <button
            className={`bg-blue-600 px-16 py-2 ${
              titleImage && "!bg-black/75 !border-t-2 border-white"
            }`}
          >
            Order Now
          </button>
          {titleImage && (
            <button className="bg-black border border-white px-16 py-2">
              Learn More
            </button>
          )}
          {!titleImage && (
            <button className="bg-gray-300 px-16 py-2 text-slate-900">
              Demo Drive
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
