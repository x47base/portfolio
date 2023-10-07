import './footer.css';

export default function Footer(){
    return (
        <footer className="flex flex-col justify-center items-center p-2 bg-brand">
            <div className="flex flex-wrap gap-3 font-normal text-white justify-center items-center">
                <a href="./disclaimer.txt">Disclaimer</a>
                <a href="./impressum.txt">Impressum</a>
            </div>
            <span className="text-white font-normal">&copy; Samuel Spink</span>
        </footer>
    );
}