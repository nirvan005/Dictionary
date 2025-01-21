import { createContext, useState } from "react";
import { getMeaning } from "../Services/GetService";

export const DictContext = createContext({
  found: true,
  result: [],
  onSearch: (text) => {},
});
function ContextProvider({ children }) {
  let [found, setFound] = useState(false);
  let [result, setResult] = useState([]);
  const onSearch = async (text) => {
    try {
      const res = await getMeaning(text);
      setResult(res.data);
      setFound(true);
    } catch (err) {
      console.log(err);
      setFound(false);
    }
  };
  return (
    <DictContext.Provider value={{ found, result, onSearch }}>
      {children}
    </DictContext.Provider>
  );
}
export default ContextProvider;
