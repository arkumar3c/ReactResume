import React, { createContext, useState } from 'react';
export const MyContext:any= createContext(null);

const DataContext = (props:any) => {
  const [data,setData]=useState<any>("hello this is arvinda kumar")
  return (
    <MyContext.Provider value={data}>
        {props.children}
    </MyContext.Provider>
  )
}

export default DataContext
