import React from 'react';
import ReactDOM from 'react-dom/client';
// styles
import './assets/scss/normalize.scss';
import './assets/scss/fonts.scss';

// components
import App from './components/app/App';
import { Provider } from 'react-redux';

// store
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode>
);