export interface IIntro {
	name: string;
	nickname: string;
	phone: string;
	email: string;
	github: string;
	linkedin: string;
	location: string;
	website: string;
	objective: string;
	resumeUrl: {
		sourceLink: string;
		fullVersion: string;
		dataLink: string;
	};
}

export interface IProject {
	name: string;
	details: string;
	url: string;
	hide?: boolean;
}

export interface ITechnologyDetail {
	text: string;
	hide?: boolean;
}

export interface ITechnology {
	section: string;
	details: ITechnologyDetail[];
	hide?: boolean;
}

export interface IExperience {
	position: string;
	company: string;
	location: string;
	url: string;
	years: string[];
	details: string[];
	hide?: boolean;
}

export interface IEducation {
	head: string;
	school: string;
	details: Array<string | { text: string; hide?: boolean }>;
	hide?: boolean;
}

export interface IAchievement {
	name: string;
	details: string;
	hide?: boolean;
}

export interface IOther {
	detail: string;
	hide?: boolean;
}
