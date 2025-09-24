import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Technology Risk Analyst, Intern',
		company: 'SCBX',
		location: 'Bangkok, Thailand',
		url: 'https://scbx.com',
		years: ['August, 2025', 'Present'],
		details: [
			"Assisted in managing AI technology and cybersecurity risks within the organizations", 
			"Evaluated CVSS controls risk for cloud-based applications and services"
		],
	},
	{
		position: 'AI Researcher, Intern',
		company: 'Japan Advanced Institute of Science and Technology (JAIST)',
		location: 'Nomi, Japan',
		url: 'https://jaist.ac.jp',
		years: ['June', 'August, 2025'],
		details: [
			"Conducted AI Safety and Alignment research under joint supervision of JAIST and Chulalongkorn University", 
			"Researched cases on the mechanistic interpretability of large language models for chain of thought faithfulness and randomness in LLMs"
		],
	},
	{
		position: "Software Engineer, Part Time",
		company: 'Ayasan Holding',
		location: 'Remote',
		url: 'https://ayasan-service.com',
		years: ['May, 2025', 'Present'],
		details: [
			'Maintaining and developing new features for the Ayasan website using NextJS and NuxtJS',
			'Implementing new features and fixing bugs in the Ayasan mobile app using React Native.'
		],
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
		position: 'Data Engineer, Part Time',
		company: "People's Party",
		location: 'Bangkok, Thailand',
		url: 'https://peoplesparty.or.th',
		years: ['November, 2024', 'June, 2025'],
		details: [
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
		]
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
