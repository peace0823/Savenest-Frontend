// components/SignUpButton.tsx
import Link from "next/link";

const SignUpButton: React.FC = () => {
  return (
    <Link
      href="/signup"
      className="
        px-4 py-2 rounded-lg bg-[#FF9F1C] text-white font-semibold
        hover:bg-[#1F299C]
        transition duration-200 cursor-pointer
      "
    >
      Sign Up
    </Link>
  );
};

export default SignUpButton;
