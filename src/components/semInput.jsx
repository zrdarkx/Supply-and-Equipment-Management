import { Label, TextInput } from "flowbite-react";

const SemInput = ({
  id,
  icon,
  type,
  label,
  placeholder,
  addOn,
  event,
  name,
}) => {
  return (
    <div className="my-2">
      <div className="mb-2 block">
        <Label className="text-white" htmlFor={id} value={label} />
      </div>
      <TextInput
        name={name}
        onChange={event}
        addon={addOn}
        id={id}
        icon={icon}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default SemInput;
