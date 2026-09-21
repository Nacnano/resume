import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';

import Work from '../src/components/Work.svelte';

describe('Work Component', () => {
	test('renders the supplied experience information', () => {
		const { getByText } = render(Work, {
			position: 'Web Developer',
			company: 'My Company',
			location: 'Remote',
			url: 'https://example.com',
			years: ['2019', '2021'],
			details: ['Developed A', 'Lead team B']
		});

		expect(getByText('Web Developer')).toBeTruthy();
		expect(getByText('My Company')).toBeTruthy();
		expect(getByText('Remote')).toBeTruthy();
		expect(getByText('2019 - 2021')).toBeTruthy();
		expect(getByText('Developed A')).toBeTruthy();
		expect(getByText('Lead team B')).toBeTruthy();
	});
});
