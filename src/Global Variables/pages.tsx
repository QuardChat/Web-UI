import * as Icons from "@mui/icons-material";
import {ReactElement} from "react";
import Messages from "../Pages/Messages.tsx";
import Users from "../Pages/Users.tsx";
import Login from "../Pages/Login.tsx";

export const pages: Page[] = [{
	node: <Messages/>, icon: <Icons.Message/>, link: "messages", label: "Messages", enabled: true,
}, {
	node: <Users/>, icon: <Icons.AccountTree/>, link: "users", label: "Users", enabled: true,
}, {
	node: <Login/>, icon: <Icons.Login/>, link: "login", label: "Login", enabled: !localStorage.getItem("token"),
}];

interface Page {
	icon: ReactElement;
	label: string;
	link: string;
	node: ReactElement;
	enabled: boolean
}