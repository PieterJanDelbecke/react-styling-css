import styled from "@emotion/styled";

const MainDiv = styled.div`
	background: #1b97f0;
	height: 100vh;
`;

const Container = styled.div`
	position: absolute;
	width: 712px;
	height: 842px;
	left: 400px;
	top: 64px;

	background: #ffffff;
	/* shadow/500 */

	box-shadow: 0px 8px 12px 6px rgba(139, 146, 162, 0.1), 0px 2px 3px rgba(139, 146, 162, 0.1);
	border-radius: 4px;
`;

const LoginPage = () => {
	return (
		<MainDiv>
			<Container>
                <button>GrowMetrics - LOGO</button>
                <p>SIGN IN TO GTOWMETRICS</p>
                <input type="email"/>
                <input type="password"/>
                <p>Forgot password?</p>
                <button>Sign in</button>
                <p>---- OR ----</p>
                <button>Continue with Google</button>
                <button>Continue with Facebook</button>
                <button>Continue with Twitter</button>
                <button>Continue with LinkedIn</button>
                <hr />
                <p>DON'T HAVE AN ACCOUNT?</p>
                <button>Sign up</button>
			</Container>
		</MainDiv>
	);
};

export default LoginPage;
