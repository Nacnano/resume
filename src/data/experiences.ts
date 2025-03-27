import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Incoming AI Technology Risk Analyst, Intern',
		company: 'SCBX',
		location: 'Bangkok, Thailand',
		url: 'https://www.scbx.com/th/',
		years: ['Starting August', 'December, 2025'],
		details: []
	},
	{
		position: 'Incoming AI Researcher, Intern',
		company: 'Japan Advanced Institute of Science and Technology (JAIST)',
		location: 'Nomi, Japan',
		url: 'https://www.jaist.ac.jp/english/',
		years: ['Starting June', 'August, 2025'],
		details: []
	},
	{
		position: 'Data Engineer, Part Time',
		company: "People's Party",
		location: 'Bangkok, Thailand',
		url: 'https://peoplesparty.or.th',
		years: ['November, 2024', 'Present'],
		details: [
			'Implementing and deploying RAG LLM answering party policies and documents using Google Vertex AI and BigQuery for vector database',
			'Created data pipelines with Google BigQuery using Apache Airflow',
			'Integrated data using Krayin CRM via its APIs as an internal tool for managing data'
		]
	},
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://agoda.com',
		years: ['June', 'November, 2024'],
		details: [
			'Migrated .NET and Scala internal tool to Kotlin',
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
		years: ['June', 'August, 2023'],
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
		years: ['March', 'August, 2022'],
		details: [
			'Designed, implemented, and maintained the TCAS Ranking service with over 40,000 students participating',
			'Automated bots for updating user data and implemented e2e tests using Selenium and Cypress',
			'Queried MySQL and PostgreSQL databases for data analysis tasks for business development'
		]
	}
];
