// @ts-nocheck
// eslint-disable
/** @file ESLint Configuration file. */
"use strict";


require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: "@redguy12",
	ignorePatterns:"./.eslintrc.js",

	overrides: [
		{
			extends: "@redguy12/eslint-config/browser",
			// Client-side scripts (including HTML files)
			files: ["./src/**.js"],
		},
		{
			files: "!**.md/*",
			parserOptions: {
				ecmaVersion: 8,
				project: require("path").resolve(__dirname, "./jsconfig.json"),
			},
		},
	],

	root: true,
};

module.exports = config;
