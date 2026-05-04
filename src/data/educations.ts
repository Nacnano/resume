import type { IEducation } from '../types';

export const educations: IEducation[] = [
	{
		head: 'B.Eng. Computer Engineering',
		school: 'Chulalongkorn University, Thailand. 2022-Present (Expected Graduation: June 2026)',
		details: [
			'Achieved 3.93/4.00 GPA for 7 semesters',
			{
				text: 'Integration Bee Competition Representative',
				hide: true
			},
			{ text: 'Exchange Program: Guangxi University, China', hide: true },
			{ text: 'Teaching Assistant: Backend Course (Computer Engineering Essentials)', hide: true },
			{
				text: 'Coursework: Data Structures, Algorithms, Natural Language Processing, Pattern Recognition, Programming Methodology',
				hide: true
			}
		]
	},
	{
		head: 'High School',
		school: 'Mahidol Wittayanusorn School, Thailand. 2019-2022 (GPA 4.00/4.00)',
		details: [
			'Participants in exchange programs, symposiums, and competitions',
			{
				text: 'Won 1st Degree Diploma from 21st Kolmogorov Readings Conference, Russia',
				hide: true
			}
		],
		hide: true
	},
	{
		head: 'Secondary School',
		school: 'Suankularb Wittayalai School, Thailand. 2016-2019 (GPA 3.56/4.00)',
		details: [],
		hide: true
	}
];
