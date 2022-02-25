import './App.css';
import React from "react";
import {Header, MainContent} from "./components/layout";

function App() {
    const Users = React.lazy(() => import("./modules/users/Users"));
    return (
        <div className="App">
            <Header/>
            <MainContent>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Users/>
                </React.Suspense>
            </MainContent>
        </div>
    );
}

export default App;
