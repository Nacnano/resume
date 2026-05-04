import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Data Scientist, Intern',
		company: 'SCB',
		location: 'Bangkok, Thailand',
		url: 'https://scb.co.th',
		years: ['January, 2026', 'April, 2026'],
		details: [
			'Researched market sentiment in FOMC minutes using NLP techniques to improve macroeconomic forecasting'
		]
	},
	{
		position: 'AI Engineer, Part Time',
		company: 'QuanXAI',
		location: 'Bangkok, Thailand',
		url: 'https://quanxai.com',
		years: ['January, 2026', 'March, 2026'],
		details: [
			'Developed an AI agent chatbot for retail using LangChain, LiteLLM, and AWS services',
			{
				text: 'Designed an ML-based fraud detection POC for mule account detection using transactional data',
				hide: true
			}
		]
	},
	{
		position: 'AI Researcher and Technology Risk, Intern',
		company: 'SCBX',
		location: 'Bangkok, Thailand',
		url: 'https://scbx.com',
		years: ['August', 'December, 2025'],
		details: [
			'Researched US and Thai stock market prediction using transfer learning on ESG data',
			{
				text: 'Tested internal cybersecurity and AI risk-management chatbots',
				hide: true
			}
		]
	},
	{
		position: 'AI Researcher, Intern',
		company: 'Japan Advanced Institute of Science and Technology (JAIST)',
		location: 'Nomi, Japan',
		url: 'https://jaist.ac.jp',
		years: ['June', 'August, 2025'],
		details: [
			'Investigated mechanistic interpretability of LLMs, focusing on chain-of-thought faithfulness and randomness',
			{
				text: 'Researched AI Safety and Alignment under the supervision of JAIST and Chulalongkorn University',
				hide: true
			}
		]
	},
	{
		position: 'Software Engineer, Part Time',
		company: 'Ayasan Holding',
		location: 'Remote',
		url: 'https://ayasan-service.com',
		years: ['May, 2025', 'July, 2025'],
		details: [
			'Developed website features using Next.js and Nuxt.js',
			'Built and improved mobile app features using React Native'
		],
		hide: true
	},
	{
		position: 'Data Engineer, Part Time',
		company: "People's Party",
		location: 'Bangkok, Thailand',
		url: 'https://peoplesparty.or.th',
		years: ['November, 2024', 'June, 2025'],
		details: [
			'Built Google BigQuery data pipelines using Apache Airflow and integrated Krayin CRM APIs for internal lead management'
		]
	},
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://agoda.com',
		years: ['June', 'November, 2024'],
		details: [
			'Migrated role-management tools to Kotlin and integrated OPA and Okta OAuth2 Proxy for authorization'
		]
	},
	{
		position: 'Full Stack Developer, Intern',
		company: 'Wang Data Market',
		location: 'Bangkok, Thailand',
		url: 'https://wang.in.th',
		years: ['June', 'August, 2023'],
		details: [
			'Implemented React forms and Express.js API endpoints',
			'Architected core structures for AI features'
		],
		hide: true
	},
	{
		position: 'Software Engineer and Data Analyst, Part Time',
		company: 'MonkeyEveryday',
		location: 'Bangkok, Thailand',
		url: 'https://monkeyeveryday.com',
		years: ['March, 2022', 'December, 2025'],
		details: [
			'Architected a TCAS ranking simulation service for 40k+ users',
			'Maintained internal platform using Next.js, NestJS, GraphQL, Prisma, and PostgreSQL',
			'Automated data synchronization bots and end-to-end tests using Selenium and Cypress',
			'Optimized VM deployments and resolved OS-level inode issues'
		],
		hide: true
	}
];
