import {Box, Button, Grid, Paper} from "@mui/material";
import {signal} from "@preact/signals-react";
import "../../public/styles.sass"
import LoginComponent from "./Login/LoginComponent.tsx";
import {api} from "../Utils/api.ts";

const email = signal("")

async function handleLogin() {
	const username = (document.getElementById('username') as HTMLInputElement)?.value || '';
	const password = (document.getElementById('password') as HTMLInputElement)?.value || '';
	if (!(username != "" && password != "")) return "Empty username or password"
	try {
		api.post("/accounts/login", {
			"username": username, "password": password
		}).then((res) => {
			localStorage.setItem("token", res.data.token)
		})
			.catch((e) => {
				console.log(e.response.status)
			})
	} catch (error) {
		console.error('Error logging in:', error);
		//setError('Invalid response data');
	}
}

function handleRegister() {

}

const register = signal(false)

function Login() {
	if (localStorage.getItem("token")) location.href = location.href.replace("login", "")
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
				{LoginComponent()}
				<Button sx={{marginTop: 2}} onClick={handleLogin} fullWidth variant='outlined'>Login</Button>
			</Grid>
		</Paper>
	</Box>
}

export default Login