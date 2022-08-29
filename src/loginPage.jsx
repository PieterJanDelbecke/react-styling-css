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

// const SignInBtn = styled.button`
// 	width: 344px;
// 	height: 48px;
// 	background: #a239ff;
// 	border-radius: 100px;
// 	border: 1px solid #a239ff;
// 	margin: 12px auto;
// 	box-sizing: border-box;
// 	color: #fff;
// `;

const SignInBtn = styled.button`
	width: 344px;
	height: 48px;
	background: #a239ff;
	border-radius: 100px;
	border: 1px solid #a239ff;
	margin: 12px auto;
	box-sizing: border-box;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 13px 64px 11px 48px;
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
	margin: 12px auto;

	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 13px 64px 11px 48px;


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
		props.linkedin &&
		css`
			background: #ffffff;
			border: 1px solid #256cc2;
		`}
`;

const Logo = styled.p``;

const GText = styled.p`
	width: 184px;
	height: 20px;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	color: #757575;
`;
const FbText = styled.p`
	width: 184px;
	height: 20px;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	color: #fff;
`;
const TwText = styled.p`
	width: 184px;
	height: 20px;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	color: #fff;
`;

const LiText = styled.p`
	width: 184px;
	height: 20px;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	color: #256cc2;
`;

const Hr = styled.hr`
	margin: 30px;
	width: 90%;
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
	margin: 10px auto;
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

	&::placeholder{
		padding-left: 1rem;
	}
	`;

const LoginPage = () => {
	return (
		<Body>
			<Container>
				<InputDiv>
					<InputLabel htmlFor="email-input">Email</InputLabel>
					<InputInput type="email" name="email-input" placeholder="pieter@growmofo.com" />
				</InputDiv>
				<InputDiv>
					<InputLabel htmlFor="password-input">Password</InputLabel>
					<InputInput type="password" name="email-input" placeholder="****" />
				</InputDiv>
				<SignInBtn>
					<SignInBtnText>Sign In</SignInBtnText>
				</SignInBtn>
				<StyledButton google>
					<Logo>G</Logo>
					<GText>Continue with Google</GText>
				</StyledButton>
				<StyledButton fb>
					<Logo>F</Logo>
					<FbText>Continue with Facebook</FbText>
				</StyledButton>
				<StyledButton twitter>
					<Logo>T</Logo>
					<TwText>Continue with Twitter</TwText>
				</StyledButton>
				<StyledButton linkedin>
					<Logo>L</Logo>
					<LiText>Continue with LinkedIn</LiText>
				</StyledButton>
				<Hr />
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
