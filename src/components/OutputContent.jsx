import { useContext } from "react";
import { DictContext } from "../store/DictContext";
import ListItem from "./ListItem";

function OutputContent() {
  const { result } = useContext(DictContext);
  const meanings = result[0].meanings;
  return (
    <>
      {meanings.map((item) => (
        <ListItem item={item}></ListItem>
      ))}
    </>
  );
}
export default OutputContent;
