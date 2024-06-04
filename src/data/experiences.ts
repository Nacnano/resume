import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://www.agoda.com',
		years: ['June, 2024', 'Now'],
		details: [
			'Migrating .NET and Scala backend services to Kotlin',
			'Building a new internal tool for managing accounts data for both customers and employers'
		]
	},
	{
		position: 'Full Stack Developer, Intern',
		company: 'Wang Data Market',
		location: 'Bangkok, Thailand',
		url: 'https://wang.in.th',
		years: ['June, 2023', 'August, 2023'],
		details: [
			'Implemented various input types for its form feature using React and creating new API endpoints using ExpressJS',
			'Helped designing and developing new base structures for an upcoming main AI feature'
		]
	},
	{
		position: 'Full Stack Developer and Data Scientist, Intern',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['March, 2022', 'August, 2022'],
		details: [
			'Designed, implemented, and maintained the TCAS Ranking algorithm service with over 40,000 students participating',
			'Helped querying its database for data analysis tasks using MySQL and PostgreSQL for business development',
			'Automated bots for updating user data using Selenium',
			'Maintained Monkey-Monkey websites for both frontend and backend using VueJS and Firebase',
			'Implemented end-to-end tests using Cypress'
		]
	}
];
