<script lang="ts">
  import { airdrop } from "$lib/airdrop";
  import { ABI, ADDRESS } from "$lib/contract";
  import { client } from "$lib/viem";
  import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
  import JSConfetti from "js-confetti";
  import { fade } from "svelte/transition";
  import {
    decodeFunctionResult,
    encodeAbiParameters,
    encodeFunctionData,
    keccak256,
    parseAbiParameters,
  } from "viem";

  const jsConfetti = new JSConfetti();

  let show_not_eligible = false;
  let show_eligible = false;

  const onSuccess = () => jsConfetti.addConfetti({ emojis: ["💸"] });

  const onFailure = () => jsConfetti.addConfetti({ emojis: ["⛔️"] });

  const resetState = () => {
    show_not_eligible = false;
    show_eligible = false;
  };

  async function connectWallet() {
    if (!$client) return;
    resetState();

    const [address] = await $client.wallet.requestAddresses();

    const values = airdrop.eligible.map((item) => [item.address, item.amount]);
    const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

    for (const [i, v] of tree.entries()) {
      if (v[0] === address) {
        const proof = tree.getProof(i);

        const _address = address as `0x${string}`;

        const leaf = keccak256(
          keccak256(
            encodeAbiParameters(parseAbiParameters("address a, uint u"), [
              _address,
              BigInt(v[1]),
            ])
          )
        );

        const data = encodeFunctionData({
          abi: ABI,
          functionName: "verify",
          args: [proof.map(BigInt) as any, BigInt(leaf)],
        });

        const res = await $client.public.call({
          account: _address,
          to: ADDRESS,
          data: data,
        });

        if (res.data) {
          const eligible = decodeFunctionResult({
            abi: ABI,
            functionName: "verify",
            data: res.data,
          });
          if (eligible) {
            onSuccess();
            show_eligible = true;
            return;
          }
        }
      }
    }

    onFailure();
    show_not_eligible = true;
  }
</script>

<div class="relative w-full flex justify-center">
  <button
    class="max-w-xl px-8 py-4 bg-dark text-xl text-white
    border border-dark-light rounded-[50px]
    hover:bg-[#282626] hover:text-white/60 transition-colors duration-200"
    on:click={connectWallet}
  >
    Check for eligibility
  </button>

  {#if show_not_eligible}
    <p
      in:fade
      out:fade
      class="px-5 py-3 my-5 absolute top-full
        text-red-500/80 bg-dark
        border rounded-full border-red-500/60"
    >
      You are not eligible
    </p>
  {/if}

  {#if show_eligible}
    <p
      in:fade
      out:fade
      class="px-5 py-3 my-5 absolute top-full
        text-green-500/80 bg-dark
        border rounded-full border-green-500/60"
    >
      You are eligible
    </p>
  {/if}
</div>
