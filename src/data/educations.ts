import type { IEducation } from '../types';

export const educations: IEducation[] = [
	{
		head: 'B.Eng. Computer Engineering',
		school: 'Chulalongkorn University, Thailand. 2022-Present (Expected Graduation: June 2026)',
		details: [
			'Achieved 3.98 GPA for 5 semesters',
			// 'Participated in an exchange program with Guangxi University, China',
			'Teaching Assistant: Computer Engineering Essentials (Backend Course)',
			'Representative in an university-level Integration Bee Competition for Faculty of Engineering',
			// 'Related Coursework: Data Structures, Algorithm Design, Programming Methodology, Pattern Recognition'
		]
	},
	{
		head: 'High School',
		school: 'Mahidol Wittayanusorn School, Thailand. 2019-2022 (GPA 4.00)',
		details: [
			'Participated in numerous high school exchange programs, international symposium, and competitions'
		]
	},
	{
		head: 'Secondary School',
		school: 'Suankularb Wittayalai School, Thailand. 2016-2019 (GPA 3.56)',
		details: [],
		hide: true
	}
];
