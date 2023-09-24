import React, {createContext, useState}  from 'react'

export const P1Context = createContext();

function P1ContextProvider(props) {

    const [contextDataP, setContextDataP] = useState(1);

    const valor = {contextDataP, setContextDataP};

  return (
    <P1Context.Provider value={valor}>
        {props.children}
    </P1Context.Provider>
  )
}

export default P1ContextProvider