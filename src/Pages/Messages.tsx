import {Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material';
import {signal} from '@preact/signals-react';
import {api} from "../Utils/api.ts";
import {useEffect} from "react";
import {Message, User} from '../Utils/types.ts';
import {Signal} from "@preact/signals";
import * as Icons from "@mui/icons-material"

function sendMessage(message: string) {
	api.post("/messages", {
		"token": localStorage.getItem("token"), message: message, time: Date.now(),
	}).catch((e) => {
		console.log(e.response.status)
	})
}

async function getMessages() {
	return await api.get("/messages/").then(async (data) => {
		const messages: Message[] = data.data;
		return await Promise.all(messages.map(async (message: Message) => {
			const userData: User = (await api.post("accounts/getAccountInfo", {ID: message.user.ID})).data;
			// @ts-ignore
			return (<Grid key={`${message.message}${message.time}${userData.USERNAME}`}>
				<Paper sx={{padding: 2, marginBottom: 2}}>
					<Grid container spacing={2} alignItems="center">
						<Grid item>
							<Avatar alt={userData.USERNAME} src={userData.avatarURL}/>
						</Grid>
						<Grid item xs>
							<Grid container alignItems="center" spacing={1}>
								{!!userData.isStaff && (<Grid item>
									<Icons.Security fontSize="small"/>
								</Grid>)}
								<Grid item>
									<Typography variant="subtitle1" fontWeight="bold">
										{userData.USERNAME}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="caption" color="textSecondary">
										{new Date(message.time).toLocaleString()}
									</Typography>
								</Grid>
							</Grid>
							<Typography variant="body1">{message.message}</Typography>
							<Button variant="outlined" onClick={() => api.delete("/messages/", {
								headers: {
									Authorization: `Bearer ${token}`,
								}
							})}>Delete</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>);
		}));
	});
}

function Messages() {
	const messages: Signal<unknown[]> = signal([]);
	useEffect(() => {
		const getMessagesAsync = async () => {
			messages.value = await getMessages()
		};

		const interval = setInterval(getMessagesAsync, 1000);

		return () => {
			clearInterval(interval)
		};
	}, [messages])
	console.log(messages)
	return <Grid container spacing={2}>
		<Grid item xs={12}>
			{messages}
		</Grid>
		<Grid container spacing={2} sx={{margin: 2}}>
			<Grid item xs>
				<TextField
					fullWidth
					label="Message"
					variant="outlined"
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							// @ts-ignore
							sendMessage(e.target['value'].toString())
						}
					}}
				/>
			</Grid>
			<Grid item>
				<Button variant="outlined" onClick={() => api.post("clearMessages")}>Clear Chat</Button>
			</Grid>
		</Grid>
		<Grid container spacing={2} sx={{margin: 2}}>

		</Grid>
	</Grid>;
}


export default Messages;
