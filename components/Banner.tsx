/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Faizan's Daily Blog</h1>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest technologies | The weekly debugging -
        nightmares & More!
      </p>
    </div>
  );
};

export default Banner;
