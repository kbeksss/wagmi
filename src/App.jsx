import "./App.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import WalletActions from "./sections/WalletActions/index.jsx";
import Home from "./pages/Home/index.jsx";
import { Route, Routes } from "react-router";
import ReceivePage from "./pages/ReceivePage/index.jsx";
import SendPage from "./pages/SendPage/index.jsx";
import SwapPage from "./pages/SwapPage/index.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/receive"} element={<ReceivePage />} />
      <Route path={"/send"} element={<SendPage />} />
      <Route path={"/swap"} element={<SwapPage />} />
    </Routes>
  );
}

export default App;
