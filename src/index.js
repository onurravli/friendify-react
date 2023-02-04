import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogCard from './LogCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<LogCard
			userName={'onur'}
			trackName={'Vasiyet'}
			artistName={'Sagopa Kajmer'}
			imageUrl={'https://avatars.githubusercontent.com/u/47084109'}
			timestamp={12345678910}
		></LogCard>
	</React.StrictMode>,
);
