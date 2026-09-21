import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview -- --host 127.0.0.1',
		url: 'http://127.0.0.1:4173',
		reuseExistingServer: true
	},
	testDir: 'tests',
	testMatch: '**/*.e2e.ts',
	use: {
		baseURL: 'http://127.0.0.1:4173',
		launchOptions: {
			executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH
		}
	}
};

export default config;
