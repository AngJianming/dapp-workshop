"use client";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
    ConnectButton,
    getDefaultConfig,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia, scrollSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
    appName: "Fund Me",
    projectId: "14ff0bb587a0b38929bfd4c86b557327",
    chains: [sepolia, scrollSepolia],
    ssr: false, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function Navbar() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        {/* <p className="flex text-xl gap-x-10"></p> */}
                        <ConnectButton></ConnectButton>
                    </div>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default Navbar;
// "use client";
// import React from "react";

// function Navbar({ onConnect, isConnected }) {
//   return (
//     <div className="flex justify-between bg-black text-white py-3 px-5">
//       <p className="text-xl mt-2">Fund Me</p>
//       <button
//         onClick={onConnect}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         {isConnected ? "Connected" : "Connect Wallet"}
//       </button>
//     </div>
//   );
// }

// export default Navbar;