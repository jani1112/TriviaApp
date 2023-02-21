export default function HeaderComp(props){
    return (
        <header>
            <nav className={props.darkmode ? "Navbar-Dark":"Navbar"}>
                <img src="../images/Troll Face.png" alt="meme-face" className="meme-face"></img>
                <h1>Trivia App</h1>
                {/* <img src="../images/Meme Generator.png" alt="meme-generator-img" className="meme-generator-img"></img> */}
                <span className="mode-text">Light</span>
                <label className="switch"> 
                    <input type="checkbox" name="Modeswitch" checked ={props.darkmode} onChange={props.toggle}/>
                    <span className="slider round"></span>
                </label>
                <span className="mode-text">Dark</span>
            </nav>
        </header>
)
    }