import React from "react";
import { useAccount } from "wagmi";

const ReceivePage = () => {
  const { address } = useAccount();
  return <div>receive page</div>;
};

export default ReceivePage;
