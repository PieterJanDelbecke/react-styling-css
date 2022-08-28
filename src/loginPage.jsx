import styled from "@emotion/styled";

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
	justify-content:center;
	letter-spacing: 0.1px;

	color: #fff;
`;
const GoogleBtn = styled.button`
	width: 344px;
	height: 48px;
	background: #ffffff;
	border-radius: 100px;
	border: 1px solid #757575;
	margin: 12px auto;

	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 13px 64px 11px 48px;
`;

const FbBtn = styled.button`
	width: 344px;
	height: 48px;
	border-radius: 100px;
	border: 1px solid #1877f2;
	background: #1877f2;
	margin: 12px auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 64px 11px 48px;
	gap: 4px;
`;
const TwitterBtn = styled.button`
	width: 344px;
	height: 48px;
	border-radius: 100px;
	background: #1b97f0;
	margin: 12px auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 64px 11px 48px;
	gap: 4px;
`;

const LinkedInBtn = styled.button`
	width: 344px;
	height: 48px;
	border-radius: 100px;
	border: 1px solid #256cc2;
	margin: 12px auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 64px 11px 48px;
	gap: 4px;
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

const LoginPage = () => {
	return (
		<Body>
			<Container>
				<SignInBtn>
					<SignInBtnText>Sign In</SignInBtnText>
				</SignInBtn>
				<GoogleBtn>
					<Logo>G</Logo>
					<GText>Continue with Google</GText>
				</GoogleBtn>
				<FbBtn>
					<Logo>F</Logo>
					<FbText>Continue with Facebook</FbText>
				</FbBtn>
				<TwitterBtn>
					<Logo>T</Logo>
					<TwText>Continue with Twitter</TwText>
				</TwitterBtn>
				<LinkedInBtn>
					<Logo>L</Logo>
					<LiText>Continue with LinkedIn</LiText>
				</LinkedInBtn>
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
