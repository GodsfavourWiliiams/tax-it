"use client";

import { Icons } from "@/assets/icons";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import GetStartedCTA from "@/components/get-started";
import Hero from "@/components/hero";
import PaymentTool from "@/components/payment-tool";
import React from "react";

const Index = () => {
  const features = [
    {
      name: "User Friendly",
      description: "Highly responsive and easy to navigate",
      icon: Icons.moneyTransfer,
    },
    {
      name: "SSL certificates",
      description:
        "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.",
      icon: Icons.security,
    },
    {
      name: "Fast",
      description:
        "Transacting takes only a few seconds - it's convenient and safe.",
      icon: Icons.EMI,
    },
  ];

  const payrollFeatures = [
    {
      name: "Pay bills",
      description: "Paying your bills has never been so easy.",
    },
    {
      name: "Buy Airtime & Data",
      description: "Never get caught with low airtime and data again!",
    },
    {
      name: "Money Transfer",
      description: "Transferring money is now hassle-free.",
    },
    {
      name: "Pay Toll Fee",
      description: "Never worry about getting a toll ticket again",
    },
  ];
  return (
    <div>
      <Hero />
      <PaymentTool data={features} />
      <Features data={payrollFeatures} />
      <GetStartedCTA />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
