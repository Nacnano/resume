import type { IProject } from '../types';

export const projects: IProject[] = [
	{
		name: 'Thai Context Understanding of LLMs',
		details:
			'Established a benchmark for Thai context understanding in LLMs, utilizing Visual Genome data to generate questions for model evaluation.',
		url: 'https://github.com/Nacnano/thai-context-llm-benchmark'
	},
	{
		name: 'Stock Return Prediction',
		details:
			'Developed ML models to predict S&P 500 stock returns, achieving 42.52% annual returns via LSTM back-testing with risk management. Implemented feature importance analysis.',
		url: 'https://github.com/Nacnano/stock-machine-learning-project/'
	},
	{
		name: 'Multimedia Learning Efficiency Prediction in Student using MASK R-CNN',
		details:
			'Utilized Mask R-CNN for image segmentation and Random Forest for factor identification to analyze multimedia effects on learning efficiency.',
		url: 'https://github.com/Nacnano/predicting-and-comparing-learners-interest-in-note-taking-from-multimedia-using-a-machine-learning-'
	},
	{
		name: 'CU Get Reg',
		details:
			'Open-source project providing course data to Chulalongkorn students. Developed the back-office service using NestJS and GraphQL to manage 700+ reviews and 500+ elective courses, serving 15,000+ max weekly users.',
		url: 'https://github.com/thinc-org/cugetreg'
	},
	{
		name: 'CU Get Rekt',
		details:
			'Award-winning hackathon project facilitating student withdrawals. Designed and maintained the backend using NestJS and Prisma, featuring automated PDF generation and score prediction.',
		url: 'https://github.com/Nacnano/cugetrekt',
		hide: true
	},
	{
		name: 'CU First Date and Rub Puen Kao Mai 2024',
		details:
			'Developed the registration and profile editing modules for the CU First Date and Rub Puen Kao Mai event platform, featuring house selection and QR code activities.',
		url: 'https://github.com/isd-sgcu/firstdate-rpkm67-frontend/'
	},
	{
		name: 'CU Intania Open House 2024',
		details:
			'Developed the workshop reservation system for the Engineering Faculty Open House with over 9,000 users using Next.js and Firestore.',
		url: 'https://github.com/esc-chula/intania-openhouse-2024/'
	},
	{
		name: 'Soul Seasons',
		details:
			'Built an interactive exhibition website using Next.js and Framer Motion, attracting 5,000+ users.',
		url: 'https://github.com/CBC-soul-seasons/soul-seasons',
		hide: true
	},
	{
		name: 'E-learning Website',
		details:
			'Developed the backend for a hackathon e-learning project using NestJS and Prisma; deployed via Docker and Google Cloud Run.',
		url: 'https://github.com/thinc-org/hacktoschool-fryingchicken',
		hide: true
	},
	{
		name: 'GFinder',
		details:
			'Designed a mathematical model to identify the Tennis GOAT using Python, Pandas, and NumPy for the IMMC 2021 competition.',
		url: 'https://github.com/Nacnano/IMMC-2021',
		hide: true
	},
	{
		name: 'MWIT29 Archive',
		details:
			'Developing a high school archive website using Next.js, MongoDB, and Google Cloud Storage (Work in Progress).',
		url: 'https://github.com/nacnano/mwit29-archive',
		hide: true
	}
];
