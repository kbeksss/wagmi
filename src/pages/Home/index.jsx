import React from "react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import WalletActions from "../../sections/WalletActions/index.jsx";
import { injected } from "wagmi/connectors";

const Home = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { data: balanceData } = useBalance({ address });
  console.log("address:", address);
  console.log("balance:", balanceData);
  return (
    <div>
      {address ? (
        <div>
          <h3 className={"text-lg mb-4"}>Address: {address}</h3>
          <h3 className={"text-lg mb-4"}>
            Balance: {balanceData?.formatted} {balanceData?.symbol}
          </h3>
          <button onClick={disconnect}>Disconnect wallet</button>
          <WalletActions />
        </div>
      ) : (
        <div>
          <h3>Please connect your wallet (Sepolia)</h3>
          <button onClick={() => connect({ connector: injected() })}>
            Connect wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
