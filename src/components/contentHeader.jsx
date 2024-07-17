import { HiOfficeBuilding } from "react-icons/hi";
import SemTitle from "./semTitle";
import { Button, Tooltip } from "flowbite-react";

const ContentHeader = ({ event, title, Icon, tooltip }) => {
  return (
    <div className="content-header p-10 flex flex-row justify-between items-center">
      <div className="wrapper flex flex-row items-center">
        <SemTitle title={title} color={"white"} />
        <Icon className="ml-3" color="white" size={30} />
      </div>
      <div className="button-wrapper flex flex-row">
        <Tooltip content={tooltip}>
          <Button onClick={event} gradientMonochrome="info">
            Add {title}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ContentHeader;
