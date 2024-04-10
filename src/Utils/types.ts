export interface User {
	ID: number;
	USERNAME: string;
	avatarURL: string;
	isStaff: boolean
}

export interface Message {
	user: User;
	message: string;
	time: number;
}