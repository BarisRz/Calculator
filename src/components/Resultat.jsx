import { useResult } from "../contexts/ResultContext";

function Resultat() {
  const { resultatFinal } = useResult();

  return (
    <div className="resultat w-full bg-[#181f32] dark:bg-[#eeeeee] transition text-6xl rounded-xl flex items-center justify-end p-5 overflow-x-auto">
      <p className="mt-2">{resultatFinal}</p>
    </div>
  );
}

export default Resultat;
