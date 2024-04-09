import {Box, Button, ButtonGroup} from "@mui/material";
import {pages} from "../Global Variables/pages.tsx";

function Navigation() {
	return (<Box>
		<ButtonGroup
			variant="outlined"
			sx={{
				position: 'absolute', bottom: "2%", left: '50%', transform: 'translate(-50%, -50%)'
			}}
		>
			{pages.map((page) => (<Button sx={{borderRadius: 100}} key={page.label} href={`/#/${page.link}`}>
				{page.icon}
				{page.label}
			</Button>))}
		</ButtonGroup>
	</Box>)
}

export default Navigation
