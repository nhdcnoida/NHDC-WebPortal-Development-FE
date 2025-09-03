import Image from "next/image";
import HomePage from "./Home/page";
import { ssrFetch } from "@/lib/ssrFetch";

// Correct async function syntax
export default async function Home() {
  const { navigation } = await ssrFetch(['navigation']);

  // console.log("Page",navigation)
  


  return <HomePage navigation={navigation} />;
}
