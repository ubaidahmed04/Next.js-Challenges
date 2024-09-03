import Image from "next/image";
import CountDown from "./components/counter";
import Weather from "./components/weather-widget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <CountDown/> */}
      <Weather/>
          </main>
  );
}
