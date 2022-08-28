import { BrowserRouter, Routes, Route } from "react-router-dom";

import Global from "./styles/global";
import LoginPage from "./loginPage";

function App() {
	return (
		<>
			<Global />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
