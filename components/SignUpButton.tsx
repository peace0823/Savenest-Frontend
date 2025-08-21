// components/SignUpButton.tsx
import Link from "next/link";

const SignUpButton: React.FC = () => {
  return (
    <Link
      href="/signup"
      className="
        px-5 py-2 rounded-full bg-[#FBBF24] text-black font-semibold border-
        hover:bg-[#fbbe249c] hover:text-black
        transition duration-200 cursor-pointer
      "
    >
      Start Nest
    </Link>
  );
};

export default SignUpButton;
