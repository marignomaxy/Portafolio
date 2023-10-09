import React,{ useState } from "react";
export const EnlaceActivoContext = React.createContext()

// eslint-disable-next-line react/prop-types
const EnlaceProvider =({children})=>{
  const [enlaceActivo, setEnlaceActivo] = useState("inicio");


  return (
    <EnlaceActivoContext.Provider value={{ enlaceActivo, setEnlaceActivo }}>
      {children}
    </EnlaceActivoContext.Provider>
  );
}

export default EnlaceProvider