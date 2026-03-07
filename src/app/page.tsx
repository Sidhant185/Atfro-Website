import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-10 h-screen w-full">
        <Hero />
      </div>
      <div style={{ height: "100vh" }} aria-hidden />
      <Process />
      <Services />
    </div>
  );
}
