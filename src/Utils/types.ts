export interface User {
	username: string;
	avatarURL: string;
	isStaff: boolean;
}

export interface Message {
	user: User;
	message: string;
	time: number;
}