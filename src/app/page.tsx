"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Card from "@/components/card";
import ContentArea from "@/components/ContentArea";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black  relative overflow-hidden">
      <Navbar />
      <Hero />
      <Card />
      <ContentArea />
      <Footer />
    </main>
  );
}
