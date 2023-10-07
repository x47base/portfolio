import './navbar.css';

export default function Navbar() {
    return (
        <nav className="bg-brand flex flex-row justify-between w-full p-2 pl-4 pr-4">
            <span id="person" className="font-extrabold text-2xl text-white dark:text-black">Samuel Spink</span>
            <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center text-white font-semibold">
                <a href="/" target="_self">Home</a>
                <a href="#" target="_self">About</a>
                <a href="#" target="_self">Projects</a>
            </div>
        </nav>
    );
}