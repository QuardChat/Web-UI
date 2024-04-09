import {Avatar, Grid, Paper, Typography} from '@mui/material';
import {signal} from '@preact/signals-react';
import {api} from "../Utils/api.ts";
import {useEffect} from "react";
import SecurityIcon from '@mui/icons-material/Security';
import {User} from "../Utils/types.ts";

//""
function getUsers(users: User[]) {
	console.log(users)
	return users.map((user: User) => (<Grid
	>
		<Paper sx={{padding: 2, marginBottom: 2}}>
			<Grid container spacing={2} alignItems="center">
				<Grid item>
					<Avatar alt={user.username} src={user.avatarURL}/>
				</Grid>
				<Grid item xs>
					<Grid container alignItems="center" spacing={1}>
						{user.isStaff && (<Grid item>
							<SecurityIcon fontSize="small"/>
						</Grid>)}
						<Grid item>
							<Typography variant="subtitle1" fontWeight="bold">
								{user.username}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid></Paper>
	</Grid>))
}

function Users() {
	const users = signal([]);
	useEffect(() => {
		const getUsersAsync = async () => {
			const data = await api.get("readAll")
			// @ts-ignore
			users.value = getUsers(data.data)
		};

		const interval = setInterval(getUsersAsync, 1000);

		return () => {
			clearInterval(interval)
		};
	}, [])

	return <Grid container spacing={2}>
		<Grid item xs={12}>
			{users}
		</Grid>
	</Grid>;
}


export default Users;
