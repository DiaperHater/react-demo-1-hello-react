import logo from "../logo.svg";

export default function MainContent() {
    return (
        <main className="px-2 relative">
            <img src={logo} alt="" className="absolute top-1/2 ring-0 -translate-y-1/2 translate-x-1/2 z-0 opacity-20" />
            <div className="relative">
                <h2 className="text-4xl font-bold mb-5">
                    Fun facts about React
                </h2>
                <ul className="list-inside">
                    <li className="mb-3 last:mb-0 flex">
                        <i className="shrink-0 rounded-full w-3 h-3 bg-cyan-300 block mt-2 mr-3"></i>
                        It's a popular library, so I'll be able to fit in with the cool kids!
                    </li>
                    <li className="mb-3 last:mb-0 flex">
                        <i className="shrink-0 rounded-full w-3 h-3 bg-cyan-300 block mt-2 mr-3"></i>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur facere repellendus?
                    </li>
                    <li className="mb-3 last:mb-0 flex">
                        <i className="shrink-0 rounded-full w-3 h-3 bg-cyan-300 block mt-2 mr-3"></i>
                        Lorem ipsum dolor sit amet.
                    </li>                
                </ul>
            </div>
        </main>
    );
}