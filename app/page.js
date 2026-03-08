import Image from "next/image";
import Navbar from "./Header/page";
import Footer from "@/app/Footer/page";
import Subscribe from "./Subscribe/page";
import SocialMedia from "./SocialMedia/page";
import Hero from "./HomePage/Hero/page";
import Data from "./HomePage/HomeData/page.js";
import Community from "./HomePage/Community/page";
import About from "./HomePage/HomeAbout/page";
import Updates from "./HomePage/UpdatesSection/page";
import Team from "./HomePage/TeamSection/page";
import Testimonials from "./HomePage/TestimonialsSection/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <Data/>
    <Community/>
    <About/>
    <Updates/>
    <Team/>
    <Testimonials/>
    </>
  );
}
