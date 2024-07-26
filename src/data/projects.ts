import type { IProject } from '../types';

export const projects: IProject[] = [
	{
		name: 'CU Get Reg',
		details:
			"Thinc's open source project to provide courses data to Chulalongkorn students and plan their enrollments. Contributed by developing its Backoffice backend service using NestJS and GraphQL for managing over 700 reviews and 500 elective courses with over 15,000 maximum users per week. ",
		url: 'https://github.com/thinc-org/cugetreg'
	},
	{
		name: 'CU Get Rekt',
		details:
			"Thinc's 10 days project for making student's withdrawals and resignations more efficient and easier by using its automated pdf generator and score prediction features. Helped designing, developing, deploying, and maintaining its backend using Nestjs and Prisma. Got the first place from over 50 teams",
		url: 'https://github.com/Nacnano/cugetrekt'
	},
	{
		name: 'CU Intania Open House 2024',
		details:
			'A website for the Open House event at Faculty of Engineering, Chulalongkorn University used by over 9,000 students. Developed its workshop reservation features using NextJS for both frontend and backend and Firestore for its database',
		url: 'https://github.com/esc-chula/intania-openhouse-2024/'
	},
	{
		name: 'E-learning Website',
		details:
			"Thinc and Cleverse's 5 days Hack to School project for creating a website by given technical requirements. Developed its backend using Nestjs and Prisma, and deploying the project using Docker and Google Cloud Run",
		url: 'https://github.com/thinc-org/hacktoschool-fryingchicken',
		hide: true
	},
	{
		name: 'Stock Return Prediction',
		details:
			'Developed machine learning models to predict stock returns using historical S&P 500 data, achieving 42.52% annual returns with LSTM from back-tesing with risk management. Implemented feature importance for multiple models',
		url: 'https://github.com/Nacnano/stock-machine-learning-project/',
		hide: true
	},
	{
		name: 'School Computer Science Project',
		details:
			"Usage of MASK R-CNN model for Image Segmentation and Random Forest model for Factor Identification to analyse multimedia effects on students' learning efficiency",
		url: 'https://github.com/Nacnano/predicting-and-comparing-learners-interest-in-note-taking-from-multimedia-using-a-machine-learning-',
		hide: true
	},
	{
		name: 'GFinder',
		details:
			'Mathematical Model and Paper for finding the Greatest Of All Time player in Tennis sport by analyzing major Tennis tournament data for competing in the International Mathematical Model Competition 2021. Designed and Implemented the mathematical model using Python, Pandas, and Numpy',
		url: 'https://github.com/Nacnano/IMMC-2021',
		hide: true
	},
	{
		name: 'MWIT29 Archive',
		details:
			'A website for archiving memorable information from my high school by allowing the students to edit their data using NextJS with MongoDB and Google Cloud Storage (Working in Process)',
		url: 'https://github.com/nacnano/mwit29-archive',
		hide: true
	}
];
