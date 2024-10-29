export default function Header() {
    return (
        <header className="header">
            <div className="content">
                <a href="/" className="logo">
                    <img src="/assets/img/duch.png" alt="Duch" />
                    <img src="/assets/img/gomegle.png" alt="Logo" />
                    <div className="beta-badge">
                        <span>Beta</span>
                    </div>
                </a>
                <nav className="menu">
                    <div className="items">
                        <div className="item">
                            <a href="/kontakt">Kontakt</a>
                        </div>
                        <div className="item">
                            <a href="/feedback">Feedback</a>
                        </div>
                        <div className="item">
                            <a href="/o-nas">O nás</a>
                        </div>
                    </div>
                </nav>
                <div className="right-side">
                    <div className="online-users">
                        <span>XYZ online</span>
                    </div>
                    <a href="/login" className="btn-login">
                        <img src="/assets/img/login-btn.svg" alt="Login Btn" />
                    </a>
                </div>
            </div>
        </header>
    )
}