import type { IProject } from '../types';

export const projects: IProject[] = [
	{
		name: 'Thai Context Understanding Benchmark of Multimodal LLMs',
		details:
			'Created a Thai multimodal LLM benchmark using Visual Genome data to generate evaluation questions.',
		url: 'https://github.com/Nacnano/thai-context-llm-benchmark'
	},
	{
		name: 'Fine-tuning Diffusion Language Model for Thai Text Summarization',
		details:
			'Performed supervised fine-tuning and evaluated the LLaDA diffusion model for Thai text summarization against SOTA LLMs using DeepEval.',
		url: 'https://github.com/pupipatsk/NanoLLaDA'
	},
	{
		name: 'Chess Move Detection using Transfer Learning with CNN',
		details:
			'Engineered a computer-vision pipeline (96.94% accuracy) for chess video-to-notation by fine-tuning ResNet and InceptionV3.',
		url: 'https://github.com/athensclub/chess-video-move-detection'
	},
	{
		name: 'Stock Return Forecasting with Portfolio Optimization',
		details:
			'Forecasted S&P 500 returns (42.52% YoY) using various ML models and portfolio-optimization techniques.',
		url: 'https://github.com/Nacnano/stock-machine-learning-project/'
	},
	{
		name: 'Multimedia Learning Efficiency in Student Analysis using MASK R-CNN',
		details: 'Analyzed multimedia learning efficiency using Mask R-CNN and Random Forest.',
		url: 'https://github.com/Nacnano/predicting-and-comparing-learners-interest-in-note-taking-from-multimedia-using-a-machine-learning-',
		hide: true
	},
	{
		name: 'CU Get Reg',
		details:
			'Chulalongkorn University course portal back-office (15k+ users). NestJS/GraphQL service managing 700+ reviews/500+ courses.',
		url: 'https://github.com/thinc-org/cugetreg'
	},
	{
		name: 'CU Get Rekt',
		details:
			'Hackathon winner: Student withdrawal app. Designed the backend (NestJS/Prisma) with automated PDF generation.',
		url: 'https://github.com/Nacnano/cugetrekt',
		hide: true
	},
	{
		name: 'CU First Date and Rub Puen Kao Mai 2024',
		details: 'Developed the registration module for CU First Date (House selection, QR activities).',
		url: 'https://github.com/isd-sgcu/firstdate-rpkm67-frontend/',
		hide: true
	},
	{
		name: 'CU Intania Open House 2024',
		details: 'Developed a workshop reservation system (9k+ users) using Next.js and Firestore.',
		url: 'https://github.com/esc-chula/intania-openhouse-2024/',
		hide: true
	},
	{
		name: 'Soul Seasons',
		details: 'Built an interactive exhibition site (5k+ users) using Next.js and Framer Motion.',
		url: 'https://github.com/CBC-soul-seasons/soul-seasons',
		hide: true
	},
	{
		name: 'E-learning Website',
		details: 'Developed an e-learning backend using NestJS, Prisma, and Google Cloud Run.',
		url: 'https://github.com/thinc-org/hacktoschool-fryingchicken',
		hide: true
	},
	{
		name: 'GFinder',
		details: 'Researched a math model for Tennis GOAT identification using Python and Pandas (IMMC 2021).',
		url: 'https://github.com/Nacnano/IMMC-2021',
		hide: true
	},
	{
		name: 'MWIT29 Archive',
		details: 'Built a school archive using Next.js, MongoDB, and Cloud Storage.',
		url: 'https://github.com/nacnano/mwit29-archive',
		hide: true
	}
];
