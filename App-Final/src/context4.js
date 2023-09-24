import React, {createContext, useState}  from 'react'

export const P4Context = createContext();

function P4ContextProvider(props) {

    const [contextDataB, setContextDataB] = useState(1);

    const valor = {contextDataB, setContextDataB};

  return (
    <P4Context.Provider value={valor}>
        {props.children}
    </P4Context.Provider>
  )
}

export default P4ContextProvider