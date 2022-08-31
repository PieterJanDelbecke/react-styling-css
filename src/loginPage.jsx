import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Body = styled.div`
	height: 100vh;
	background: #1b97f0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 712px;
	height: 842px;

	background: #ffffff;

	box-shadow: 0px 8px 12px 6px rgba(139, 146, 162, 0.1), 0px 2px 3px rgba(139, 146, 162, 0.1);
	border-radius: 4px;
`;

const GmLogo = styled.button`
	width: 208px;
	height: 48px;
	background: #f8f2ff;
	border-radius: 100px;
	border: 1px solid #f8f2ff;
	display: flex;
	margin: 34px auto;
	box-sizing: border-box;
	color: #ab78f7;
`;

const SignInBtnText = styled.p`
	width: 184px;
	height: 20px;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.1px;

	color: #fff;
`;
const StyledButton = styled.button`
	width: 344px;
	height: 48px;
	border-radius: 100px;
	margin: 20px auto;

	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 13px 64px 11px 48px;

	${(props) =>
		props.signin &&
		css`
			background: #a239ff;
			border: 1px solid #a239ff;
			justify-content: center;
			margin: 32px auto;
		`}
	${(props) =>
		props.google &&
		css`
			background: #ffffff;
			border: 1px solid #757575;
		`}
	${(props) =>
		props.fb &&
		css`
			border: 1px solid #1877f2;
			background: #1877f2;
		`}
	${(props) =>
		props.twitter &&
		css`
			border: 1px solid #1b97f0;
			background: #1b97f0;
		`}
	${(props) =>
		props.linkedIn &&
		css`
			background: #ffffff;
			border: 1px solid #256cc2;
		`}
`;

const Logo = styled.p``;

const BtnText = styled.p`
	width: 184px;
	height: 20px;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	${(props) =>
		props.google &&
		css`
			color: #757575;
		`}
	${(props) =>
		props.fb &&
		css`
			color: #fff;
		`}
	${(props) =>
		props.twitter &&
		css`
			color: #fff;
		`}
	${(props) =>
		props.linkedIn &&
		css`
			color: #256cc2;
		`}
`;

const HrBig = styled.hr`
	margin: 30px;
	width: 90%;
`;

const HrSmall = styled.hr`
	width: 344px;
	margin: 0 auto 30px;
`;

const AccountDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AccountText = styled.div`
	height: 24px;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;

	letter-spacing: 2px;
	text-transform: uppercase;
	font-feature-settings: "tnum" on, "lnum" on;
	color: #757575;
`;

const SignUpBtn = styled.button`
	display: inline-block;
	padding: 9px 32px 7px;
	gap: 4px;

	width: 131px;
	height: 34px;

	background: #ffffff;
	border: 1px solid #a239ff;
	border-radius: 100px;
	margin: 0px 20px;
	display: flex;
	justify-content: center;
`;

const SignUpBtnText = styled.p`
	width: 50px;
	height: 16px;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.1px;
	color: #a239ff;
`;

const InputDiv = styled.div`
	margin: 12px auto;
	width: 344px;
	display: flex;
	flex-direction: column;
`;

const InputLabel = styled.label`
	width: 31px;
	height: 16px;
	font-size: 12px;
	line-height: 16px;
	color: #757575;
`;

const InputInput = styled.input`
	width: 344px;
	height: 40px;
	border: solid 1px #d2d2d2;

	&::placeholder {
		padding-left: 1rem;
	}
`;

const Paragraph = styled.p`
	margin: 12px auto;
	width: 344px;
	color: #a239ff;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: #757575;
	margin: 6px auto 12px;
	width: 244px;
`;

const LoginPage = () => {
	return (
		<Body>
			<Container>
				<GmLogo></GmLogo>
				<Title>sign in to growmetrics</Title>
				<InputDiv>
					<InputLabel htmlFor="email-input">Email</InputLabel>
					<InputInput type="email" name="email-input" placeholder="pieter@growmofo.com" />
				</InputDiv>
				<InputDiv>
					<InputLabel htmlFor="password-input">Password</InputLabel>
					<InputInput type="password" name="email-input" placeholder="****" />
				</InputDiv>
				<Paragraph>Forgot password?</Paragraph>
				<StyledButton signin>
					<SignInBtnText>Sign In</SignInBtnText>
				</StyledButton>
				<HrSmall />
				<StyledButton google>
					<Logo>G</Logo>
					<BtnText google>Continue with Google</BtnText>
				</StyledButton>
				<StyledButton fb>
					<Logo>F</Logo>
					<BtnText fb>Continue with Facebook</BtnText>
				</StyledButton>
				<StyledButton twitter>
					<Logo>T</Logo>
					<BtnText twitter>Continue with Twitter</BtnText>
				</StyledButton>
				<StyledButton linkedIn>
					<Logo>L</Logo>
					<BtnText linkedIn>Continue with LinkedIn</BtnText>
				</StyledButton>
				<HrBig />
				<AccountDiv>
					<AccountText>don't have an account?</AccountText>
					<SignUpBtn>
						<SignUpBtnText>Sign Up</SignUpBtnText>
					</SignUpBtn>
				</AccountDiv>
			</Container>
		</Body>
	);
};

export default LoginPage;
