// import Image from "next/image";

import Aboutme from "./components/aboutme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Workscard from "./components/workscard";

export default function Home() {
  return <div><Header/><Hero/><Aboutme/><Skills/> <Workscard/></div>;
}
