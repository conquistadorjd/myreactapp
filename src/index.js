import React from 'react';
import ReactDOM from 'react-dom';

var websiteName = 'techtrekking.net';
var newStyle = { color:'blue'};

var myList = (<div>
                <h1>You are on website {websiteName}</h1>
                <ul>
                    <li style={newStyle}>FIrst</li>
                    <li>Second</li>
                    <li>Third</li>
                  </ul>
              </div>)

ReactDOM.render(myList, document.getElementById('root'))