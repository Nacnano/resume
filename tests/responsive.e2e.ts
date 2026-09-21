import { expect, test } from '@playwright/test';

test('renders the resume editor and primary action', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Choose what to print' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Chotpisit Adunsehawat' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Print or save PDF' })).toBeVisible();
});

for (const viewport of [
	{ name: 'phone', width: 320, height: 800 },
	{ name: 'tablet', width: 820, height: 1180 },
	{ name: 'desktop', width: 1440, height: 1000 }
]) {
	test(`does not overflow at the ${viewport.name} breakpoint`, async ({ page }) => {
		await page.setViewportSize(viewport);
		await page.goto('/');

		const sizes = await page.evaluate(() => ({
			viewport: window.innerWidth,
			document: document.documentElement.scrollWidth
		}));

		expect(sizes.document).toBeLessThanOrEqual(sizes.viewport);
	});
}

test('keeps editor controls out of print output', async ({ page }) => {
	await page.goto('/');
	await page.emulateMedia({ media: 'print' });

	await expect(page.getByRole('banner')).toBeHidden();
	await expect(page.getByRole('heading', { name: 'Chotpisit Adunsehawat' })).toBeVisible();
});
