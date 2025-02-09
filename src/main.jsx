import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const extensionId = 'injected-extension-root';

const root = document.createElement('div');
root.id = extensionId;
document.body.appendChild(root);

createRoot(document.getElementById(extensionId)).render(
	<StrictMode>
		<App />
	</StrictMode>
);
