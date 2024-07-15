import { Label, Select } from "flowbite-react";

const SemSelect = ({ data, label, id, icon, event, name }) => {
  return (
    <div className="my-2">
      <div className="mb-2 block">
        <Label className="text-white" htmlFor={id} value={label} />
      </div>
      <Select name={name} onChange={event} icon={icon} required id={id}>
        {data.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </Select>
    </div>
  );
};

export default SemSelect;
