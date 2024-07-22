import { Spinner } from "flowbite-react";

const ScreenLoading = () => {
  return (
    <div
      style={{ zIndex: 99 }}
      className="w-full absolute  h-screen opacity-80  bg-slate-950 flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <Spinner size={"lg"} />
        {/* <h1 className="text-white">Loading...</h1> */}
      </div>
    </div>
  );
};

export default ScreenLoading;
