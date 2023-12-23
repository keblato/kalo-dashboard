import { HTMLInputTypeAttribute } from "react";

export function Input({
  inpuType = "text",
  name,
  id,
  placeholder,
}: {
  placeholder?: string;
  inpuType?: HTMLInputTypeAttribute;
  name: string;
  id: string;
}) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type={inpuType}
        name={name}
        id={id}
        className="white block w-full rounded-lg py-2 pl-4 pr-25w-full border-2 border-gray focus:outline-none focus:border-blue-500 "
        placeholder={placeholder}
      />
    </div>
  );
}
