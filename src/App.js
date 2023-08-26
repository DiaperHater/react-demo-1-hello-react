
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App bg-[#282c35] min-h-screen flex flex-col text-white">
            <Header />
            <div className="my-8">
                <MainContent />
            </div>
            <div className="mt-auto"></div>
            <Footer />
        </div>
    );
}

export default App;
