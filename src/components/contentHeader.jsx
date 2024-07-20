import { HiPlus } from "react-icons/hi";
import { Button, Tooltip } from "flowbite-react";
import { TableTabs } from "./tableTabs";

const ContentHeader = ({ event, title, Icon, tooltip }) => {
  return (
    <div className="content-header flex flex-row justify-between items-center">
      <div className="py-0">
        <TableTabs />
      </div>
      <div className="wrapper">
        <Tooltip content={tooltip}>
          <Button onClick={event} gradientMonochrome="info">
            <HiPlus color="white" className="mr-2 h-5 w-5" />
            Add {title}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ContentHeader;
