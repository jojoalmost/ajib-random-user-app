import './App.css';
import Users from "./modules/users/Users";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent>
                <Users/>
            </MainContent>
        </div>
    );
}

export default App;
