import {Avatar, Box, Button, Grid, Input, InputAdornment, Paper, TextField} from "@mui/material";
import * as Icons from "@mui/icons-material"
import {signal} from "@preact/signals-react";
import "../../public/styles.sass"

function handleLogin() {

}

function handleRegister() {

}

function Login() {
	const email = signal("")
	const username = signal("")
	const password = signal("")

	return <Box>
		<Paper className='login' sx={{
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			padding: 5,
			borderRadius: 20,

		}}>
			<Grid container justifyContent="center">
				<Avatar></Avatar>
				<Grid container>
					<TextField InputProps={{
						startAdornment: <InputAdornment position="start"><Icons.Email/></InputAdornment>,
					}} fullWidth onChange={(e) => email.value = e.target.value} label="Email" variant="standard" />
					<TextField InputProps={{
						startAdornment: <InputAdornment position="start"><Icons.Person/></InputAdornment>,
					}} fullWidth onChange={(e) => username.value = e.target.value} label="Username" variant="standard" />
					<TextField InputProps={{
						startAdornment: <InputAdornment position="start"><Icons.Key/></InputAdornment>,
					}} fullWidth onChange={(e) => password.value = e.target.value} label="Password" variant="standard" />
				</Grid>
				<Button sx={{marginTop: 2}} onClick={() => handleLogin()} fullWidth variant='outlined'>Login</Button>
				<Button sx={{marginTop: 2}} onClick={() => handleRegister()} fullWidth variant='outlined'>Register</Button>
			</Grid>

		</Paper>
	</Box>
}

export default Login