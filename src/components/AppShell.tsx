"use client";

import { useState } from "react";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";
import { RuoBanner } from "@/components/nav/RuoBanner";
import { CartSheet } from "@/components/cart/CartSheet";
import { AgeGateModal } from "@/components/gate/AgeGateModal";
import { AssistantSheet } from "@/components/assistant/AssistantSheet";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [assistantOpen, setAssistantOpen] = useState(false);
  return (
    <>
      <RuoBanner />
      <Header onOpenAssistant={() => setAssistantOpen(true)} />
      <main>{children}</main>
      <Footer />
      <CartSheet />
      <AgeGateModal />
      <AssistantSheet open={assistantOpen} onOpenChange={setAssistantOpen} />
    </>
  );
}
