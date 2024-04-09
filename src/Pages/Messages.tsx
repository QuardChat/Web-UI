import {Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material';
import {signal} from '@preact/signals-react';
import {api} from "../Utils/api.ts";
import {useEffect} from "react";
import SecurityIcon from '@mui/icons-material/Security';
import {Message} from '../Utils/types.ts';


const username = signal(localStorage.getItem("username") || "Guest");
const avatarUrl = signal(localStorage.getItem("avatarUrl") || "")


function sendMessage(message: string) {
	api.post("postMessage", {
		"user": {
			"userId": username, "avatarUrl": avatarUrl
		}, "message": message, "time": Date.now()
	})
}

//""
function getMessages(messages: Message[]) {
	return messages.map((message: Message) => (<Grid key={`${message.message}${message.time}${message.user.userId}`}
	>
		<Paper sx={{padding: 2, marginBottom: 2}}>
			<Grid container spacing={2} alignItems="center">
				<Grid item>
					<Avatar alt={message.user.userId} src={message.user.avatarUrl}/>
				</Grid>
				<Grid item xs>
					<Grid container alignItems="center" spacing={1}>
						{message.user.isStaff && (<Grid item>
							<SecurityIcon fontSize="small"/>
						</Grid>)}
						<Grid item>
							<Typography variant="subtitle1" fontWeight="bold">
								{message.user.userId}
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="caption" color="textSecondary">
								{new Date(message.time).toLocaleString()}
							</Typography>
						</Grid>
					</Grid>
					<Typography variant="body1">{message.message}</Typography>
					<Button variant="outlined" onClick={() => api.post("deleteMessage", message)}>Delete</Button>
				</Grid>
			</Grid></Paper>
	</Grid>))
}

function Messages() {
	const messages = signal([]);
	useEffect(() => {
		const getMessagesAsync = async () => {
			const data = await api.get("getMessages")
			// @ts-ignore
			messages.value = getMessages(data.data)
		};

		const interval = setInterval(getMessagesAsync, 1000);

		return () => {
			clearInterval(interval)
		};
	}, [])

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
