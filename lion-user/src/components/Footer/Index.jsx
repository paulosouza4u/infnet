import logotipo from "@image/lion-react.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer w-100 text-center">
                <img src={logotipo} alt="logotipo" className="img-fluid my-3"/>
                <p><small>
                    Front-End com React <br/>
                    MIT Desenvolvimento Web Full Stack <br/>
                    INFNET | 2025
                </small></p>
            </div>
        </footer>
    );
}

export default Footer;