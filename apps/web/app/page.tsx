import { Doto } from "next/font/google";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <header className="tracking-tighter bg-black text-white">
      <h1 className="font-doto text-8xl font-bold">Sébastien K. </h1>
      <h2 className="font-doto text-4xl font-semibold leading-0.5">
        Software Engineer
      </h2>
    </header>
  );
}
