import React from "react";
import ConnectModal from "./ConnectModal";

type Props = {};

function Header({}: Props) {
  return (
    <div className="">
      <p>Header</p>
      <ConnectModal />
    </div>
  );
}

export default Header;
