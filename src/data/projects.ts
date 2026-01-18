import type { IProject } from '../types';

export const projects: IProject[] = [
	{
		name: 'Thai Context Understanding Benchmark of Multimodal LLMs',
		details:
			'Established Thai multimodal LLM benchmark using Visual Genome data to generate evaluation questions.',
		url: 'https://github.com/Nacnano/thai-context-llm-benchmark'
	},
	{
		name: 'Fine-tuning Diffusion Language Model for Thai Text Summarization',
		details:
			'Supervised fine-tuned and evaluated LLaDA, a diffusion language model, for Thai summarization. Benchmarked against SOTA LLMs via DeepEval/LangChain.',
		url: 'https://github.com/pupipatsk/NanoLLaDA'
	},
	{
		name: 'Chess Move Detection using Transfer Learning with CNN',
		details:
			'Engineered a CV pipeline for chess video-to-notation with 96.94% accuracy. Fine-tuned ResNet/InceptionV3 for transfer learning.',
		url: 'https://github.com/athensclub/chess-video-move-detection'
	},
	{
		name: 'Stock Return Forecasting with Portfolio Optimization',
		details:
			'Forecasted S&P 500 returns (42.52% YoY) via various ML models and portfolio optimization techniques. Implemented feature importance analysis.',
		url: 'https://github.com/Nacnano/stock-machine-learning-project/'
	},
	{
		name: 'Multimedia Learning Efficiency Prediction in Student using MASK R-CNN',
		details:
			'Analyzed multimedia learning efficiency using Mask R-CNN (segmentation) and Random Forest for feature importances.',
		url: 'https://github.com/Nacnano/predicting-and-comparing-learners-interest-in-note-taking-from-multimedia-using-a-machine-learning-',
		hide: true
	},
	{
		name: 'CU Get Reg',
		details:
			'Back-office for Chulalongkorn University course data (15k+ users). NestJS/GraphQL service managing 700+ reviews/500+ courses.',
		url: 'https://github.com/thinc-org/cugetreg'
	},
	{
		name: 'CU Get Rekt',
		details:
			'Hackathon winner: Student withdrawal app. Designed backend (NestJS/Prisma) with automated PDF generation.',
		url: 'https://github.com/Nacnano/cugetrekt',
		hide: true
	},
	{
		name: 'CU First Date and Rub Puen Kao Mai 2024',
		details: 'Developed registration module for CU First Date (House selection, QR activities).',
		url: 'https://github.com/isd-sgcu/firstdate-rpkm67-frontend/',
		hide: true
	},
	{
		name: 'CU Intania Open House 2024',
		details: 'Developed workshop reservation system (9,000+ users) using Next.js/Firestore.',
		url: 'https://github.com/esc-chula/intania-openhouse-2024/',
		hide: true
	},
	{
		name: 'Soul Seasons',
		details: 'Built interactive exhibition site (5,000+ users) using Next.js/Framer Motion.',
		url: 'https://github.com/CBC-soul-seasons/soul-seasons',
		hide: true
	},
	{
		name: 'E-learning Website',
		details: 'Backend for e-learning hackathon project using NestJS, Prisma, and Google Cloud Run.',
		url: 'https://github.com/thinc-org/hacktoschool-fryingchicken',
		hide: true
	},
	{
		name: 'GFinder',
		details:
			'Researched a math model for Tennis GOAT identification via Python/Pandas/NumPy (IMMC 2021).',
		url: 'https://github.com/Nacnano/IMMC-2021',
		hide: true
	},
	{
		name: 'MWIT29 Archive',
		details: 'Building school archive: Next.js, MongoDB, Google Cloud Storage.',
		url: 'https://github.com/nacnano/mwit29-archive',
		hide: true
	}
];
