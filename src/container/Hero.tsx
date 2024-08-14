type HeroProps = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export const Hero = ({ title, description, price, image }: HeroProps) => {
  return (
    <div
      className="!min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-col flex justify-around gap-[400px] items-center">
        <div className="p-20 text-center text-white">
          <h1 className="text-5xl pt-4 font-bold mt-2 mb-2">{title}</h1>
          <p className="text-xl mb-2">{description}</p>
          <p>{price}</p>
        </div>
        <div className="text-center text-white flex gap-8 mx-auto items-center">
          <button className="bg-blue-600 px-16 py-2">Order Now</button>
          <button className="bg-gray-300 px-16 py-2 text-slate-900">
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  );
};
