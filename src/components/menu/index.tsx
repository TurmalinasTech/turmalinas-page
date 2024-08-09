import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuHamburguer } from "./MenuHamburguer";
import { MenuElements } from "./MenuElements";

const Menu: React.FC = () => {
  const [menuHamburguer, setMenuHamburguer] = useState<string>("hidden");
  const [hamburguer, setHamburguer] = useState<string>("flex");

  const handleMenuHamburguer = () => {
    setMenuHamburguer(prev => prev == "flex"? "hidden": "flex");
    setHamburguer(prev => prev == "hidden" ? "flex": "hidden" );
  };

  return (
    <section className=" bg-blue flex justify-center">
      <div className="flex items-center justify-between py-4 w-4/5 lg:w-7/12 ">
        <div>
          <img src={logo} />
        </div>
        <MenuElements/>

        <RxHamburgerMenu
          onClick={handleMenuHamburguer}
          className={`${hamburguer} md:hidden text-white text-2xl cursor-pointer`}
        />
        <div className={menuHamburguer}>
          <MenuHamburguer handleArrow={handleMenuHamburguer}/>
        </div>
      </div>
    </section>
  );
};

export { Menu };
