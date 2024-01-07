"use client";

import { Icons } from "@/assets/icons";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PaymentTool from "@/components/payment-tool";
import React from "react";

const Index = () => {
  const features = [
    {
      name: "User Friendly",
      description:
        "Buy and sell popular digital currencies, keep track of them in the one place.",
      icon: Icons.moneyTransfer,
    },
    {
      name: "SSL certificates",
      description:
        "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
      icon: Icons.security,
    },
    {
      name: "Fast",
      description:
        "Supports a variety of the most popular digital currencies and always uptodate.",
      icon: Icons.EMI,
    },
  ];

  const payrollFeatures = [
    {
      name: "Payment",
      description:
        "No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere.",
    },
    {
      name: "Payroll",
      description:
        "End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.",
    },
    {
      name: "Payslip",
      description:
        "Generates automated TaxiTPaySlip email notifications for each employee/user.",
    },
    {
      name: "Reports",
      description:
        "Generates relevant reports, such as PAYE Returns for easy compliance with filing obligations.",
    },
  ];
  return (
    <div>
      <Hero />
      <PaymentTool data={features} />
      <Features data={payrollFeatures} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
