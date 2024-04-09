import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Messages from "./Pages/Messages.tsx";
import {pages} from "./Global Variables/pages.tsx";
import Navigation from "./Utils/Navigation.tsx";

function App() {
	return <Box>
		<Navigation/>
		<Routes>
			<Route index element={<Messages/>}/>
			<Route path="/" element={<Messages/>}></Route>
			{pages.map((page) => (<Route
				key={page.label}
				path={`/${page.link}`}
				element={page.node}
			/>))}
		</Routes>
	</Box>
}

export default App
