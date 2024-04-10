import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper/Paper";
import {pages} from "../Global Variables/pages"

function Navigation() {
	return <Box
		sx={{
			position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10, // Adjust the zIndex as needed
		}}
	>
		<Paper elevation={1}>
			<ButtonGroup
				sx={{
					position: "relative", bottom: 0, left: 0, right: 0, height: "100%",
				}}
				variant="outlined"
				fullWidth={true}
			>
				{pages.map((page) => {
					if (page.enabled) {
						return (<Button key={page.label} href={`/#/${page.link}`} fullWidth={true}>
							{page.icon}
							{page.label}
						</Button>)
					}
				})}
			</ButtonGroup>
		</Paper>
	</Box>
}

export default Navigation;
