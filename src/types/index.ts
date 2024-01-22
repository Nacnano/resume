export interface IProfileResp {
	intro: IIntro;
	objective: string;
	projects: IProject[];
	technologies: ITechnology[];
	workExperiences: IWorkExperience[];
	educations: IEducation[];
	achievements: IAchievement[];
	interests: string[];
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
}

export interface IProject {
	name: string;
	details: string;
	url: string;
	hide: boolean;
}

export interface ITechnology {
	section: string;
	details: string;
}

export interface IWorkExperience {
	position: string;
	company: string;
	url: string;
	years: string[];
	details: string[];
}

export interface IEducation {
	head: string;
	details: string;
}

export interface IAchievement {
	name: string;
	details: string;
	hide: boolean;
}
