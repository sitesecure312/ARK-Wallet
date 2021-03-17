module.exports = {
	automock: false,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/dist/*"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
