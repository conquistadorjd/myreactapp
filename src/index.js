import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return (<div>  
                <h1>You are on website techtrekking.net</h1>
                <ul>
                    <li >FIrst</li>
                    <li>Second</li>
                    <li>Third</li>
                  </ul>
              </div>)
   }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
