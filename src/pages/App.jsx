import { useState } from "react";
import { motion } from "framer-motion";
import Resultat from "../components/Resultat";
import Input from "../components/Input";
import { useResult } from "../contexts/ResultContext";

function App() {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    const body = document.querySelector("html");
    body.classList.toggle("dark");
  };

  const toggleSwitch = () => setDark(!dark);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 50,
  };

  return (
    <>
      <div className="container grid gap-5 text-white dark:text-[#3b3b33] transition">
        <div className="flex justify-between items-center">
          <p className="text-3xl">calc</p>
          <div className="flex justify-between items-center">
            <p className="text-xs mt-1 pr-8 tracking-widest">THEME</p>
            <div
              className="switch bg-[#232c43] dark:bg-[#d3cdcd] transition"
              data-ison={dark}
              onClick={() => {
                toggleSwitch();
                handleTheme();
              }}
            >
              <motion.div
                className="handle bg-[#f96c5d]"
                layout
                transition={spring}
              />
            </div>
          </div>
        </div>
        <Resultat />
        <Input />
      </div>
    </>
  );
}

export default App;
