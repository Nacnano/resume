export interface IProfileResp {
	intro: IIntro;
	objective: string;
	projects: IProject[];
	technologies: ITechnology[];
	workExperiences: IWorkExperience[];
	educations: IEducation[];
	achievements: IAchievement[];
	others: IOther[];
	resumeUrl: {
		sourceLink: string;
		fullVersionLink: string;
	};
}

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
	resumeUrl: { sourceLink: string; fullVersion: string };
}

export interface IProject {
	name: string;
	details: string;
	url: string;
	hide?: boolean;
}

export interface ITechnology {
	section: string;
	details: string | string[];
	hide?: boolean;
}

export interface IWorkExperience {
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
	details?: string[];
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
