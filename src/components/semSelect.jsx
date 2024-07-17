import { Label, Select } from "flowbite-react";

const SemSelect = ({ data, label, id, icon, event, name, offices }) => {
  return (
    <div className="my-2">
      <div className="mb-2 block">
        <Label color={"info"} htmlFor={id} value={label} />
      </div>
      <Select name={name} onChange={event} icon={icon} required id={id}>
        {data.map((item) => {
          return (
            <option value={offices ? item.officeName : item}>
              {offices ? item.officeName : item}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default SemSelect;
