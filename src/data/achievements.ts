import type { IAchievement } from '../types';

export const achievements: IAchievement[] = [
	{
		name: 'Chula LegalTech Year 6 (2025)',
		details:
			'Won 1st place and a 50,000 Baht prize by designing and developing a web application that facilitates job matching for youth. My role was to develop the frontend and OCR backend service using Next.js and Flask API.'
	},
	{
		name: 'JUMP Thailand Hackathon by AIS Academy (2025)',
		details:
			'Secured 2nd Runner-up and a 40,000 Baht prize among 700+ teams for developing an AI-assisted massage teaching system for the visually impaired. Developed and deployed the instructor model using multimodal LLMs and computer vision to provide real-time feedback on muscle and posture.'
	},
	{
		name: 'AI Hackathon Powered by MITR PHOL (2025)',
		details:
			'Secured 2nd Runner-up among 156 teams for developing a predictive maintenance system for sugar harvesting machinery. Developed forecasting models from sensor data using various machine learning techniques.'
	},
	{
		name: "Thinc's 10 Days in 10 Years Project (2022)",
		details:
			'Won 1st place among 50+ teams by developing a web application to streamline student withdrawals. Designed and implemented the backend service and database.'
	},
	{
		name: 'Computer Olympiad Camp (2019–2022)',
		details:
			'Qualified for the POSN Computer Olympiad Camps at Kasetsart University (2019) and Mahidol Wittayanusorn School (2020, 2021).'
	},
	{
		name: 'Meta Hacker Cup (2022)',
		details: 'Qualified for the second round of the Meta Hacker Cup 2022.'
	},
	{
		name: 'Google Code Jam (2020, 2021)',
		details: 'Qualified for the first round of Google Code Jam in 2020 and 2021.'
	},
	{
		name: 'KU01 Coding Competition (2019)',
		details:
			'Achieved a perfect score and won 1st place in the competition at Kasetsart University.',
		hide: true
	}
];
