import Head from "next/head";
import { Inter } from "next/font/google";

import LandingPage from "@/components/LandingPage";


import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

interface Data {
  id: number;
  price: number;
  title: string;
  image: string;
  description: string;
}

export default function Home({ data }: { data: Data[] }) { // Define 'data' prop
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099-removebg-preview.png" /> 
        <meta name="theme-color" content="#317EFB"/>
        <link rel="manifest" href="/manifest.json" />

      </Head>
      <main>
        <LandingPage data={data} />
      </main>
    </div>
  );
}

export  const  getServerSideProps:GetServerSideProps=async()=> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    console.log("Fetched data:", data);

    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } };
  }
}
