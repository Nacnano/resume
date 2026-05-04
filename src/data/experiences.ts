import type { IExperience } from '../types';

export const experiences: IExperience[] = [
	{
		position: 'Data Scientist, Intern',
		company: 'SCB',
		location: 'Bangkok, Thailand',
		url: 'https://scb.co.th',
		years: ['January, 2026', 'April, 2026'],
		details: [
			'Researched market sentiment analysis on FOMC Minutes using NLP techniques to improve macroeconomic forecasting'
		]
	},
	{
		position: 'AI Engineer, Part Time',
		company: 'QuanXAI',
		location: 'Bangkok, Thailand',
		url: 'https://quanxai.com',
		years: ['January, 2026', 'March, 2026'],
		details: [
			'Developed AI agents chatbot for a retail client using LangChain and LiteLLM via AWS Services, e.g. AWS AgentCore and AWS Lambda',
			{
				text: 'Designed and POCed a fraud detection system for mule account detection from transactional data with ML models',
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
				text: 'Tested internal cybersecurity and AI risk management chatbot',
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
			'Investigated LLM mechanistic interpretability, focusing on Chain-of-Thought faithfulness and randomness',
			{
				text: 'Researched AI Safety and Alignment under JAIST and Chulalongkorn University supervision',
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
			'Developed Ayasan website features (Next.js, Nuxt.js)',
			'Built features and fixed bugs for Ayasan mobile app (React Native)'
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
			'Built Google BigQuery data pipelines via Apache Airflow',
			'Integrated Krayin CRM APIs for an internal leads management tool'
		]
	},
	{
		position: 'Software Engineer, Intern',
		company: 'Agoda',
		location: 'Bangkok, Thailand',
		url: 'https://agoda.com',
		years: ['June', 'November, 2024'],
		details: [
			'Migrated internal role management tools from .NET/Scala to Kotlin',
			'Integrated OPA and Okta OAuth2 Proxy for enhancing authorization'
		]
	},
	{
		position: 'Full Stack Developer, Intern',
		company: 'Wang Data Market',
		location: 'Bangkok, Thailand',
		url: 'https://wang.in.th',
		years: ['June', 'August, 2023'],
		details: [
			'Implemented multiple-input React forms and Express.js API endpoints',
			'Architected core structures for new AI features'
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
			'Architected and implemented TCAS Ranking Simulation service for 40k+ users',
			'Maintained internal platforms using Next.js, Vue.js, NestJS, GraphQL, Prisma, PostgreSQL',
			'Automated data synchronization bots and E2E tests with Selenium and Cypress',
			'Optimized VM deployments, resolved OS-level Inode issues'
		],
		hide: true
	}
];
