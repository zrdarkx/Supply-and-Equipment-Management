import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Spinner size={"lg"} />
    </div>
  );
};

export default Loading;
