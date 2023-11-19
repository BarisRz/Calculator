/**
 * Etape 1 : Création du context
 */
import { createContext, useState, useContext } from "react";
const ResultContext = createContext();

/**
 * Étape 2 : Création du provider
 */
export function ResultProvider({ children }) {
  const [resultatFinal, setResultatFinal] = useState("0");

  return (
    <ResultContext.Provider value={{ resultatFinal, setResultatFinal }}>
      {children}
    </ResultContext.Provider>
  );
}

/**
 * Etape 3 : export de notre hook personnalisé
 */

export const useResult = () => useContext(ResultContext);
