"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccountState {
  loggedIn: boolean;
  email: string | null;
  signIn: (email: string) => void;
  signOut: () => void;
}

export const useAccount = create<AccountState>()(
  persist(
    (set) => ({
      loggedIn: false,
      email: null,
      signIn: (email) => set({ loggedIn: true, email }),
      signOut: () => set({ loggedIn: false, email: null }),
    }),
    { name: "peptriva-account" },
  ),
);
