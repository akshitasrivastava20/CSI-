import React from "react";
// import Image from "next/image";
import Landing from "./home/page";
import { getBlogPosts } from "@/data/events";


export default async function Home() {
  const data = await getBlogPosts();
  console.log(data);
  return (
    <div>
      
    <Landing/>
    </div>
   
  );
}
