import Key from "./Key";
import { useResult } from "../contexts/ResultContext";

function Input() {
  const { resultatFinal, setResultatFinal } = useResult();
  console.log(resultatFinal);
  const numberOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className="input w-full bg-[#252d44] dark:bg-[#d3cdcd] transition rounded-xl p-8 gap-7 text-[#474e60] text-4xl">
      <div className="number-input grid w-full h-full gap-7">
        {numberOrder.map((element) => (
          <Key
            key={element}
            nameClass=""
            bg="bg-[#eae3db]"
            bgHover="hover:bg-[#ffffff]"
            name={element.toString()}
            padding="pt-1"
            border="border-[#b2a195]"
            clickFunction={() => {
              if (resultatFinal == "0" || resultatFinal === "∞") {
                setResultatFinal(element.toString());
              } else {
                setResultatFinal(resultatFinal + element);
              }
            }}
          />
        ))}
      </div>
      <Key
        nameClass="point"
        bg="bg-[#eae3db]"
        bgHover="hover:bg-[#ffffff]"
        name="."
        border="border-[#b2a195]"
        clickFunction={() => {
          if (!resultatFinal.includes(".")) {
            setResultatFinal(resultatFinal + ".");
          }
        }}
      />
      <Key
        nameClass="zero"
        bg="bg-[#eae3db]"
        bgHover="hover:bg-[#ffffff]"
        name="0"
        padding="pt-1"
        border="border-[#b2a195]"
        clickFunction={() => setResultatFinal(resultatFinal + "0")}
      />
      <Key
        nameClass="slash"
        bg="bg-[#eae3db]"
        bgHover="hover:bg-[#ffffff]"
        name="/"
        border="border-[#b2a195]"
        clickFunction={() => {
          const regex = /^(?:(?!\/\/).)*$/;
          const nouvelleChaine = resultatFinal + "/";

          if (regex.test(nouvelleChaine)) {
            setResultatFinal(nouvelleChaine);
          }
        }}
      />
      <Key
        nameClass="del"
        bg="bg-[#647299]"
        bgHover="hover:bg-[#a2b3e1]"
        name="DEL"
        padding="pt-1"
        textCSS="text-3xl text-white"
        border="border-[#424e75]"
        clickFunction={() => {
          if (resultatFinal.length === 1) {
            setResultatFinal("0");
          } else {
            setResultatFinal(resultatFinal.slice(0, -1));
          }
        }}
      />
      <Key
        nameClass="plus"
        bg="bg-[#eae3db]"
        bgHover="hover:bg-[#ffffff]"
        name="+"
        padding="pt-1"
        border="border-[#b2a195]"
        clickFunction={() => {
          const regex = /^(?:(?!\+\+).)*$/;
          const nouvelleChaine = resultatFinal + "+";

          if (regex.test(nouvelleChaine)) {
            setResultatFinal(nouvelleChaine);
          }
        }}
      />
      <Key
        nameClass="minus"
        bg="bg-[#eae3db]"
        bgHover="hover:bg-[#ffffff]"
        name="-"
        border="border-[#b2a195]"
        clickFunction={() => {
          const regex = /^(?:(?!\-\-).)*$/;
          const nouvelleChaine = resultatFinal + "-";

          if (regex.test(nouvelleChaine)) {
            setResultatFinal(nouvelleChaine);
          }
        }}
      />
      <Key
        nameClass="mult"
        bg="bg-[#eae3db]"
        bgHover="hover:bg-[#ffffff]"
        name="x"
        border="border-[#b2a195]"
        clickFunction={() => {
          const regex = /^(?:(?!\*\*\*).)*$/;
          const nouvelleChaine = resultatFinal + "*";

          if (regex.test(nouvelleChaine)) {
            setResultatFinal(nouvelleChaine);
          }
        }}
      />
      <Key
        nameClass="egal"
        bg="bg-[#d13f30]"
        bgHover="hover:bg-[#f96c5b]"
        name="="
        padding="pt-1"
        textCSS="text-3xl text-white"
        border="border-[#8f2316]"
        clickFunction={() => {
          let prec = resultatFinal.replace(/,/g, "");
          let calcul = eval(prec).toString();
          let tableau = calcul.toString().split(".");
          let result = "";
          if (tableau[1]) {
            result = Number(tableau[0]).toLocaleString().replace(/\s/g, ",");
            const nombreStr = Math.round(tableau[1].slice(0, 3)).toString();
            result += "." + nombreStr.slice(0, 2);
          } else {
            result = Number(tableau[0]).toLocaleString().replace(/\s/g, ",");
          }
          setResultatFinal(() => result);
        }}
      />
      <Key
        nameClass="reset"
        bg="bg-[#647299]"
        bgHover="hover:bg-[#a2b3e1]"
        name="RESET"
        padding="pt-1"
        textCSS="text-3xl text-white"
        border="border-[#424e75]"
        clickFunction={() => setResultatFinal("0")}
      />
    </div>
  );
}

export default Input;
