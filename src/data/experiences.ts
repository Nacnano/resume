import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://www.agoda.com',
		years: ['June, 2024', 'Present'],
		details: [
			'Migrated .NET and Scala services to Kotlin',
			'Built an internal tool for managing accounts data for both customers and employers',
			'Integrated OPA and Okta Oauth2 Proxy for authorization',
			'Added Hadoop logs for user signup service'
		]
	},
	{
		position: 'Frontend Developer, Part-time',
		company: 'CU NEX',
		location: 'Bangkok, Thailand',
		url: 'https://www.facebook.com/CUNEX.Official/',
		years: ['August, 2024', 'Present'],
		details: [
			"Designing and implementing Chulalongkorn's Election Management System for Student Government Committee"
		]
	},
	{
		position: 'Full Stack Developer, Part Time',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['August, 2022', 'Present'],
		details: [
			'Maintained and created new websites using NextJS, VueJS, NestJS with GraphQL and Prisma'
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
		],
		hide: true
	},
	{
		position: 'Full Stack Developer and Data Scientist, Intern',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['March, 2022', 'August, 2022'],
		details: [
			'Designed, implemented, and maintained the TCAS Ranking service with over 40,000 students participating',
			'Helped querying its database for data analysis tasks using MySQL and PostgreSQL for business development',
			'Automated bots for updating user data and implemented e2e tests using Selenium and Cypress'
		]
	}
];
