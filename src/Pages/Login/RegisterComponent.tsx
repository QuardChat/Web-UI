import {Button, Container, InputAdornment, TextField} from "@mui/material";
import * as Icons from "@mui/icons-material";
import {Signal} from "@preact/signals";

function RegisterComponent(email:Signal, username:Signal, password:Signal, handle) {
	return <Container>
		<TextField InputProps={{
			startAdornment: <InputAdornment position="start"><Icons.Email/></InputAdornment>,
		}} fullWidth onChange={(e) => email.value = e.target.value} label="Email" variant="standard" />

		<TextField InputProps={{
			startAdornment: <InputAdornment position="start"><Icons.Person/></InputAdornment>,
		}} fullWidth onChange={(e) => username.value = e.target.value} label="Username" variant="standard" />
		<TextField InputProps={{
			startAdornment: <InputAdornment position="start"><Icons.Key/></InputAdornment>,
		}} fullWidth onChange={(e) => password.value = e.target.value} label="Password" variant="standard" />
		<Button sx={{marginTop: 2}} onClick={() => handle()} fullWidth variant='outlined'>Register</Button>
	</Container>
}

export default RegisterComponent