import React from "react";
import Iconify from "../../components/Iconify/index.jsx";
import { useNavigate } from "react-router";

const WalletActions = () => {
  const navigate = useNavigate();
  return (
    <div className={"mt-6 flex gap-4 justify-center"}>
      <ActionItem
        onClick={() => navigate("/receive")}
        icon={
          <Iconify
            className={"rotate-210"}
            icon={"solar:arrow-up-line-duotone"}
          />
        }
      />
      <ActionItem
        onClick={() => navigate("/send")}
        icon={
          <Iconify
            className={"rotate-45"}
            icon={"solar:arrow-up-line-duotone"}
          />
        }
      />
      <ActionItem
        onClick={() => navigate("/swap")}
        icon={<Iconify icon={"ant-design:swap-outlined"} />}
      />
    </div>
  );
};

const ActionItem = ({ icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex justify-center items-center w-10 h-10 rounded-full text-black bg-[#fff] cursor-pointer"
      }
    >
      {icon}
    </div>
  );
};

export default WalletActions;
