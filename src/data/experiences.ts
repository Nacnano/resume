import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Data Engineer, Part Time',
		company: "People's Party",
		location: 'Bangkok, Thailand',
		url: 'https://peoplesparty.or.th',
		years: ['November, 2024', 'Present'],
		details: [
			'Creating data pipelines using Google BigQuery using Apache Airflow',
			'Integrating data using Krayin CRM via its APIs as an internal tool for managing data'
		]
	},
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://agoda.com',
		years: ['June, 2024', 'November, 2024'],
		details: [
			'Migrated .NET and Scala internal tool to Kotlin',
			// 'Built an internal tool for managing accounts data for both customers and employers',
			'Integrated OPA and Okta Oauth2 Proxy for authorization'
			// 'Added Hadoop logs for user signup service'
		]
	},
	{
		position: 'Frontend Developer, Part-time',
		company: 'CU NEX',
		location: 'Bangkok, Thailand',
		url: 'https://facebook.com/CUNEX.Official',
		years: ['August, 2024', 'Present'],
		details: [
			"Designing and implementing Chulalongkorn's Election Management System for Student Government Committee"
		],
		hide: true
	},
	{
		position: 'Full Stack Developer, Part Time',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['August, 2022', 'Present'],
		details: ['Maintained websites using NextJS, VueJS, NestJS with GraphQL and Prisma']
	},
	{
		position: 'Full Stack Developer, Intern',
		company: 'Wang Data Market',
		location: 'Bangkok, Thailand',
		url: 'https://wang.in.th',
		years: ['June, 2023', 'August, 2023'],
		details: [
			'Implemented various input types for its form feature using React and creating new API endpoints using ExpressJS',
			'Designed and developed new base structures for an upcoming main AI feature'
		],
		hide: true
	},
	{
		position: 'Full Stack Developer and Data Analyst, Intern',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['March, 2022', 'August, 2022'],
		details: [
			'Designed, implemented, and maintained the TCAS Ranking service with over 40,000 students participating',
			'Automated bots for updating user data and implemented e2e tests using Selenium and Cypress',
			'Queried MySQL and PostgreSQL databases for data analysis tasks for business development'
		]
	}
];
