import "./globals.scss";
import Image from "next/image";

//components
import Homepage from "./_components/Homepage";
import AboutUs from "./_components/AboutUs/index";

export default function Home() {
  return (
    <main>
      <Homepage />
      <AboutUs />
    </main>
  );
}
