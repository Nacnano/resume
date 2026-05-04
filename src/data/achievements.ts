import type { IAchievement } from '../types';

export const achievements: IAchievement[] = [
	{
		name: 'Chula LegalTech Year 6 (2025)',
		details:
			'Won 1st place (50,000 THB) for a youth job matching web app. Built frontend and OCR backend via Next.js and Flask'
	},
	{
		name: 'JUMP Thailand Hackathon by AIS Academy (2025)',
		details:
			'2nd Runner-up (40,000 THB) among 700+ teams for an AI massage teaching system using CV and Multimodal LLMs'
	},
	{
		name: 'AI Hackathon Powered by MITR PHOL (2025)',
		details:
			'2nd Runner-up among 156 teams for a predictive maintenance system using sensor data forecasting models',
		hide: true
	},
	{
		name: "Thinc's 10 Days in 10 Years Project (2022)",
		details:
			'1st place among 50+ teams for a student withdrawal app. Designed backend and database architecture',
		hide: true
	},
	{
		name: 'Computer Olympiad Camp (2019–2022)',
		details: 'Qualified for National Computer Olympiad Camps'
	},
	{
		name: 'Meta Hacker Cup (2022)',
		details: 'Qualified for Meta Hacker Cup 2022 Round 2'
	},
	{
		name: 'Google Code Jam (2020, 2021)',
		details: 'Qualified for Google Code Jam Round 1 (2020, 2021)'
	},
	{
		name: 'KU01 Coding Competition (2019)',
		details: 'Achieved perfect score and won 1st place solving competitive programming problems',
		hide: true
	}
];
