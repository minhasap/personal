import './NavBar.css'

export const NavBar = () => {
    const logoName = 'Mohammed minhas ap'

    return (<>
            <section className={'navbar-mobile'}>
                <p className="logo-mobile ">{logoName}</p>
                <div className="magic-stick-mobile"></div>
            </section>
            <section className={'navbar'}>
                <span className={'navbar__logo textestylehead'}>{logoName}</span>
                <div className={'navbar__links'}>
                    <a className={'textstylee'} href={'home'}>Home</a>
                    <a className={'textstylee'} href={'projects'}>Projects</a>
                    <a className={'textstylee'} href={'skills'}>Skills</a>
                    <a className={'textstylee'} href={'contact'}>Contact</a>
                </div>
            </section>
            <div className={'navbar-break'}/>
        </>);
};