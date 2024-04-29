import "../../styles/index.css";

const Banner = () => {
  return (
    <div className="flex items-center background-banner w-full">
      <div className="ml-10 w-full">
        <div className="text-center w-full flex flex-col justify-center items-center ">
          {/* <div className="flex flex-row gap-2 sm:text-6xl text-4xl font-bold ">
            <span className=" text-white bg-black">
              Explore the world, one destination
              <span className="text-yellow-custom1"> at a time</span>
            </span>
          </div>
          <div className=" text-lg sm:text-2xl font-bold heroPara text-white ">
            We believe that travel is the best way to learn about the world and
            its people.
          </div> */}
        </div>
        {/* <div className="max-w-[50rem] text-left mt-2 bg-black bg-opacity-30">
          <span className="text-white text-base tracking-wider ">
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided inside a hotel room may range
            from a modest-quality mattress in a small room to large suites with
            bigger, higher-quality beds, a dresser, a refrigerator and other
            kitchen facilities, upholstered chairs, a flat screen television,
            and en-suite bathrooms
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
