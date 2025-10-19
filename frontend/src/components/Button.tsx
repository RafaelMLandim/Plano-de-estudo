interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick: () => void;
}

export default function Button({
  label,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex flex-col border-white border-[1px] text-white  rounded hover:bg-custonRed-100 cursor-pointer text-[10px] p-0.5    "
    >
      {label}
    </button>
  );
}
