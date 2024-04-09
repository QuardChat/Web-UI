import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {HashRouter} from "react-router-dom";

export const theme = createTheme({
	palette: {
		mode: "dark", primary: {
			main: "#8d00b4",
		}, secondary: {
			main: "#b200bb",
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(<ThemeProvider theme={theme}>
	<CssBaseline/>
	<React.StrictMode>
		<HashRouter basename="/">
			<App/>
		</HashRouter>
	</React.StrictMode>
</ThemeProvider>)
