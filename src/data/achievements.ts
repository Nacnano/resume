import type { IAchievement } from '../types';

export const achievements: IAchievement[] = [
	{
		name: 'Chula LegalTech Year 6 (2025)',
		details:
			'Won 1st place (50,000 THB) for a youth job matching web application. Built frontend and OCR backend using Next.js and Flask.'
	},
	{
		name: 'JUMP Thailand Hackathon by AIS Academy (2025)',
		details:
			'Secured 2nd Runner-up (40,000 THB) among 700+ teams for an AI massage teaching system. Developed instructor model using multimodal LLMs and CV for real-time feedback.'
	},
	{
		name: 'AI Hackathon Powered by MITR PHOL (2025)',
		details:
			'Secured 2nd Runner-up among 156 teams for a sugar harvesting predictive maintenance system. Developed forecasting models from sensor data.',
		hide: true
	},
	{
		name: "Thinc's 10 Days in 10 Years Project (2022)",
		details:
			'Won 1st place among 50+ teams for a student withdrawal app. Designed and implemented backend and database.',
		hide: true
	},
	{
		name: 'Computer Olympiad Camp (2019–2022)',
		details:
			'Qualified for POSN Computer Olympiad Camps at Kasetsart University (2019) and Mahidol Wittayanusorn School (2020, 2021).'
	},
	{
		name: 'Meta Hacker Cup (2022)',
		details: 'Qualified for Meta Hacker Cup 2022 Round 2.'
	},
	{
		name: 'Google Code Jam (2020, 2021)',
		details: 'Qualified for Google Code Jam Round 1 (2020, 2021).'
	},
	{
		name: 'KU01 Coding Competition (2019)',
		details: 'Achieved perfect score and won 1st place at Kasetsart University competition.',
		hide: true
	}
];
