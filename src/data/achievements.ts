import type { IAchievement } from '../types';

export const achievements: IAchievement[] = [
	{
		name: 'Chula LegalTech Year 6 (2025)',
		details:
			'Won first place and a 50,000 Baht prize for designing and developing a web application that facilitates job matching for youth. My role was to develop the frontend and OCR backend service using Next.js and Flask API.'
	},
	{
		name: 'JUMP Thailand Hackathon by AIS Academy (2025)',
		details:
			'Achieved second runner-up among more than 700 teams across Thailand for developing an AI-assisted massage teaching system for blind people using head-mounted cameras and AI instructors. My role was to develop and deploy the instructor model using multimodal language models and computer vision techniques to detect muscles and postures during massage sessions and provide real-time feedback to students.'
	},
	{
		name: 'AI Hackathon Powered by MITR PHOL (2025)',
		details:
			'Achieved second runner-up among 156 teams for developing a system to prevent machinery breakdowns in sugar harvesting machines. My role was to develop forecasting models from sensor data using various machine learning techniques.'
	},
	{
		name: "Thinc's 10 Days in 10 Years Project (2022)",
		details:
			'Won first place among over 50 teams in a 10-day competition to develop a web application solving real-world problems — in this case, facilitating student withdrawals. My role was to design and develop the backend service and database.'
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
			'Achieved a perfect score and won first place in the competition at Kasetsart University.',
		hide: true
	}
];
