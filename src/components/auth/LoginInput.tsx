import { HTMLInputTypeAttribute } from "react";

export function LoginInput({
  inpuType = "text",
  name,
  id,
  label,
  placeholder,
  leading,
  trailing,
}: {
  label?: String;
  inpuType?: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  leading?: JSX.Element;
  trailing?: JSX.Element;
}) {
  return (
    <div>
      {label && <label className="block text-gray-900">{label}</label>}
      <div className="relative mt-2 rounded-md shadow-sm">
        {leading && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{leading}</span>
          </div>
        )}
        <input
          type={inpuType}
          name={name}
          id={id}
          className=" bg-gray-100 block w-full rounded-lg py-4 pl-10 pr-25w-full border border-white focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        />
        {trailing && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <span className="text-gray-500 sm:text-sm p-3">{trailing}</span>
          </div>
        )}
      </div>
    </div>
  );
}
