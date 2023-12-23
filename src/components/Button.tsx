import { ButtonsTypes } from "@/constants";

export function Button({
  title,
  buttonType = ButtonsTypes.primary,
}: {
  title?: string;
  buttonType?: ButtonsTypes;
}) {
  const styles = () => {
    let styles = "";
    switch (buttonType) {
      case ButtonsTypes.primary:
        styles =
          "shadow-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 font-semibold";
        break;
      case ButtonsTypes.secondary:
        styles = "white text-black border border-blue-700 hover:bg-gray-200";
        break;
    }
    styles += " rounded-md py-2 px-6";
    return styles;
  };
  return (
    <button type="submit" className={styles()}>
      {title}
    </button>
  );
}
