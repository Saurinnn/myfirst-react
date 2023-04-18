import React,{ useState } from "react";
//import { ColoredMessage } from "./components/ColoredMessage";
//import { CssModules } from "./components/CssModules";
//import { StyledComponents } from "./components/StyledComponents";
//import { StyledJsx } from "./components/StyledJsx";
//import { Child1 } from "./components/Child1";
//import { Child4 } from "./components/Child4";
//import { useCallback } from "react";
import { Card } from "./components/Card";
export const App = () =>{
  //管理者フラグ
  const [ isAdmin, setIsAdmin ] = useState(false);
  
  //切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);
  
  return (
  <div>
    {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
    <button onClick={onClickSwitch}>切り替え</button>
    <Card isAdmin={isAdmin}/>
  </div>
  );
};