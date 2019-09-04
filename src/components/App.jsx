import React from 'react';
import Nav from './Nav'

function App() {
  return (
        <ul>
           {
             [1,2,3,4,5].map((element,index) => {
                return(
                <div>
                  <li>{ element }</li>
                  <Nav title='音乐'/>
                  <Nav title='地址'/>
                </div>  
                )
             })
           }
        </ul>
  );
}

export default App;
