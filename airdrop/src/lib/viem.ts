import { writable } from "svelte/store";
import { createPublicClient, createWalletClient, custom, http, type PublicClient, type WalletClient } from "viem";
import { scrollSepolia } from "viem/chains";

export const client = writable<{ public: PublicClient; wallet: WalletClient } | undefined>(undefined, (set) => {
  set({
    public: createPublicClient({
      chain: scrollSepolia,
      transport: http(),
    }),
    wallet: createWalletClient({
      chain: scrollSepolia,
      transport: custom((window as any).ethereum),
    }),
  });
});
