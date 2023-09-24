import React, {createContext, useState}  from 'react'

export const P3Context = createContext();

function P3ContextProvider(props) {

    const [contextDataA, setContextDataA] = useState(1);

    const valor = {contextDataA, setContextDataA};

  return (
    <P3Context.Provider value={valor}>
        {props.children}
    </P3Context.Provider>
  )
}

export default P3ContextProvider