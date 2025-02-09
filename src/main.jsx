import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = document.createElement('div');
root.id = 'my-extension-root';
document.body.appendChild(root);

createRoot(document.getElementById('my-extension-root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
