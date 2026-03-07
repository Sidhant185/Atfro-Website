import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* Spacer so first screen is Hero-only; scroll then brings Process card up from bottom */}
      <div style={{ height: "100vh" }} aria-hidden />
      <Process />
    </div>
  );
}
