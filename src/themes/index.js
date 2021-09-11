import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				background: "white",
			},
			p: {
				fontFamily: "Inter",
			},
		},
	},
	colors: {
		text: {},
		background: {},
	},
	fonts: {
		heading: "Inter",
		body: "Inter",
	},
});

export default theme;
