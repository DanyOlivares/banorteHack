import React, {createContext, useState}  from 'react'

export const P2Context = createContext();

function P2ContextProvider(props) {

    const [contextDataC, setContextDataC] = useState(1);

    const valor = {contextDataC, setContextDataC};

  return (
    <P2Context.Provider value={valor}>
        {props.children}
    </P2Context.Provider>
  )
}

export default P2ContextProvider