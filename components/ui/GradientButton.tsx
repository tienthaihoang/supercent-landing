"use client";

interface GradientButtonProps {
  title: string;
  onClick?: () => void;
}

export default function GradientButton({
  title,
  onClick,
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-10 px-6 xl:px-9 cursor-pointer text-white! font-bold! rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-sm xl:text-base whitespace-nowrap"
    >
      {title}
    </button>
  );
}
