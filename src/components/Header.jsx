import logo from "../logo.svg";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-[#22222a] p-2">
            <a href="/" className="flex items-center">
                <img src={logo} alt="" className="w-20" />
                <p className="text-2xl font-bold text-[#0ed3f8]">
                    ReactFacts
                </p>
            </a>
            <h1 className="font-semibold text-white">
                React Course - Project 1
            </h1>
        </header>        
    );
}