import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Incoming Data Scientist, Intern',
		company: 'SCB',
		location: 'Bangkok, Thailand',
		url: 'https://scb.co.th',
		years: ['Starting January, 2026', 'April, 2026'],
		details: ['SCB Cooperative Internship Program 2026']
	},
	{
		position: 'R&D and Technology Risk, Intern',
		company: 'SCBX',
		location: 'Bangkok, Thailand',
		url: 'https://scbx.com',
		years: ['August, 2025', 'Present'],
		details: [
			'Conducted financial and AI research on U.S. and Thai stock markets using transfer learning and ESG data',
			'Assisted in testing an internal chatbot for AI technology and cybersecurity risk management'
		]
	},
	{
		position: 'AI Researcher, Intern',
		company: 'Japan Advanced Institute of Science and Technology (JAIST)',
		location: 'Nomi, Japan',
		url: 'https://jaist.ac.jp',
		years: ['June', 'August, 2025'],
		details: [
			'Conducted AI Safety and Alignment research under joint supervision of JAIST and Chulalongkorn University',
			'Investigated mechanistic interpretability in LLMs, focusing on cases of Chain-of-Thought faithfulness and randomness'
		]
	},
	{
		position: 'Software Engineer, Part Time',
		company: 'Ayasan Holding',
		location: 'Remote',
		url: 'https://ayasan-service.com',
		years: ['May, 2025', 'July, 2025'],
		details: [
			'Maintained and developed features for the Ayasan website using Next.js and Nuxt.js',
			'Implemented features and resolved bugs in the Ayasan mobile app using React Native'
		]
	},
	{
		position: 'Data Engineer, Part Time',
		company: "People's Party",
		location: 'Bangkok, Thailand',
		url: 'https://peoplesparty.or.th',
		years: ['November, 2024', 'June, 2025'],
		details: [
			'Engineered data pipelines in Google BigQuery using Apache Airflow',
			'Integrated data via Krayin CRM APIs for internal data management'
		]
	},
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://agoda.com',
		years: ['June', 'November, 2024'],
		details: [
			'Migrated internal tools from .NET and Scala to Kotlin',
			'Integrated OPA and Okta OAuth2 Proxy for enhanced authorization'
		]
	},
	{
		position: 'Full Stack Developer, Intern',
		company: 'Wang Data Market',
		location: 'Bangkok, Thailand',
		url: 'https://wang.in.th',
		years: ['June', 'August, 2023'],
		details: [
			'Implemented diverse form input types using React and developed API endpoints with Express.js',
			'Architected and developed core structures for a major upcoming AI feature'
		],
		hide: true
	},
	{
		position: 'Full Stack Developer and Data Analyst, Part Time',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['March, 2022', 'Present'],
		details: [
			'Architected and maintained the TCAS Ranking service, serving over 40,000 students',
			'Maintained internal web platforms using Next.js, Vue.js, and NestJS with GraphQL, Prisma, and PostgreSQL',
			'Developed automated bots for data synchronization and implemented E2E tests with Selenium and Cypress',
			'Resolved technical debt and performance bottlenecks related to low-level OS issues on VM deployments'
		]
	}
];
