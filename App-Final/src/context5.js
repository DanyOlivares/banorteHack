import React, {createContext, useState}  from 'react'

export const P5Context = createContext();

function P5ContextProvider(props) {

    const [contextDataE, setContextDataE] = useState(1);

    const valor = {contextDataE, setContextDataE};

  return (
    <P5Context.Provider value={valor}>
        {props.children}
    </P5Context.Provider>
  )
}

export default P5ContextProvider