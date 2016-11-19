import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle = "welcome!"
					 contentTitle = "React App"
					 contentBody = "welcome to example app"/>, rootElement);
