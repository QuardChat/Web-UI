import {Container, InputAdornment, TextField} from "@mui/material";
import * as Icons from "@mui/icons-material";

function LoginComponent() {
	return <Container>
		<TextField id="username" InputProps={{
			startAdornment: <InputAdornment position="start"><Icons.Person/></InputAdornment>,
		}} fullWidth label="Username" variant="standard"/>
		<TextField id="password" InputProps={{
			startAdornment: <InputAdornment position="start"><Icons.Key/></InputAdornment>,
		}} fullWidth label="Password" variant="standard"/>

	</Container>
}

export default LoginComponent