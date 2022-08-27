import { Global, css } from "@emotion/react";
import reset from "./reset";

export default () => (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
			${reset}
			body {
                font-family: 'Roboto', sans-serif;
			}
		`}
	/>
);