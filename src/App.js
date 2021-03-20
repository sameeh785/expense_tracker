import React from 'react';
import Child from './child'
import {  ContextProvider } from "./content";

export default function App() {
  return (
    <ContextProvider>
      <Child/>
    </ContextProvider>
    
  );
}



