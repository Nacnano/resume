import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';

import Intro from '../src/components/Intro.svelte';

describe('Intro Component', () => {
	test('renders the supplied contact information', () => {
		const { getByText } = render(Intro, {
			name: 'John Doe',
			phone: '+66 123 4567',
			email: 'john_doe@example.com',
			github: 'john_doe_gh',
			linkedin: 'john_doe_li',
			location: 'Bangkok, Thailand',
			website: 'example.com',
			objective: 'Build useful and accessible software.'
		});

		expect(getByText('John Doe')).toBeTruthy();
		expect(getByText('Bangkok, Thailand')).toBeTruthy();
		expect(getByText('+66 123 4567')).toBeTruthy();
		expect(getByText('john_doe@example.com')).toBeTruthy();
		expect(getByText('github.com/john_doe_gh')).toBeTruthy();
		expect(getByText('linkedin.com/in/john_doe_li')).toBeTruthy();
		expect(getByText('example.com')).toBeTruthy();
		expect(getByText('Build useful and accessible software.')).toBeTruthy();
	});
});
