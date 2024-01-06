"use client";

import { Icons } from "@/assets/icons";
import Hero from "@/compoenents/hero";
import PaymentTool from "@/compoenents/payment-tool";
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
  return (
    <div>
      <Hero />
      <PaymentTool data={features} />
    </div>
  );
};

export default Index;
