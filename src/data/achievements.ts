import type { IAchievement } from '../types';

export const achievements: IAchievement[] = [
	{
		name: 'Chula LegalTech Year 6 (2025)',
		details:
			'Won the first place and 50,000 bath prize for designing and developing a web application for facilitating job matching for youth. My role was to developed its frontend and OCR backend service using NextJS and FlaskAPI'
	},
	{
		name: "Thinc's 10 Days in 10 Years Project (2022)",
		details:
			"Won the first place from over 50 teams in a competition for implementing a web application for solving specific problems in 10 days for faciliating student's withdrawal. My role was to designed and developed its backend service and database"
	},
	{
		name: 'Computer Olympiad Camp (2019-2022)',
		details:
			'Qualified to the POSN Computer Olympiad camp at Kasetsart University (2019) and Mahidol Wittayansorn School (2020, 2021)'
	},
	{
		name: 'Meta Hacker Cup (2022) ',
		details: 'Qualified to the second round of Meta Hacker Cup 2022'
	},
	{
		name: 'Google Codejam (2020, 2021)',
		details: 'Qualified to the first round of Google Codejam 2020 and 2021'
	},
	{
		name: 'KU01 Coding Competition (2019)',
		details:
			'Achieved the perfect score and first place from the competition at Kasetsart University',
		hide: true
	}
];
