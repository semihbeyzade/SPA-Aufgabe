import React from "react";
import DataContextProvider from './context/DataContext';
import UserInfo from "./UserInfo";
import ChangeUserInfo from "./ChangeUserInfo";

function App() {
	return <div className="App">
		<DataContextProvider>
			<UserInfo />
			<ChangeUserInfo />
		</DataContextProvider>
	</div>;
}

export default App;
