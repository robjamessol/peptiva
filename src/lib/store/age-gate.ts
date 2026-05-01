"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AgeGateState {
  verified: boolean;
  verify: () => void;
  reset: () => void;
}

export const useAgeGate = create<AgeGateState>()(
  persist(
    (set) => ({
      verified: false,
      verify: () => set({ verified: true }),
      reset: () => set({ verified: false }),
    }),
    { name: "peptriva-verified" },
  ),
);
