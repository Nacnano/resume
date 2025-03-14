import type { ITechnology } from '../types';

export const technologies: ITechnology[] = [
	{
		section: 'Languages:',
		details: [
			'C, C++, Python, HTML, CSS, Javascript, TypeScript, Node.js, Java, Scala, Kotlin, SQL'
		]
	},
	{
		section: 'Software:',
		details: [
			'ReactJS, NextJS, VueJS, TailwindCSS, NestJS, SvelteJS, ExpressJS, Prisma, GraphQL, FastAPI, Ktor'
		]
	},
	{
		section: 'Data Science:',
		details: ['Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch']
	},
	{
		section: 'Tools:',
		details: ['Git, Docker, Selenium, Cypress, Grafana, Apache Airflow, MLflow']
	},
	{
		section: 'Services:',
		details: ['GCP, BigQuery, Firebase, Github Actions, GitLab CI/CD, Vercel, Redis, MongoDB, AWS']
	}
];
