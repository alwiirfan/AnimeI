import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar({ title }) {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <Link href={"/"}>
          <h1 className="font-bold text-lg md:text-2xl">{title}</h1>
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
