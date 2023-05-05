import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
return <div>My First component</div>
}

ReactDom.render(<App />, document.getElementById('root'));