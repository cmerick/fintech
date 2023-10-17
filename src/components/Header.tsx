import { useContext } from "react";
import { useUi } from "../hooks/UiContext";


const Header = () => {
  const {dark, setDark} = useUi();

  return (
    <h1>Header {`${useUi().dark}`}</h1>
  );
}


export default Header;