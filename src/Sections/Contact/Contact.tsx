import './Contact.css';

export const Contact = () => {
    return (
        <section id={'contact'} className={'contact container'}>
            <p className={'header textestylee'}>
                Let's craft something <span className={'contact-highlight textestylee'}>truly shareworthy</span>
            </p>
            <a href={'mailto:minhasminusap@gmail.com'}><p className={'email textestyleeee'}>minhasminusap@gmail.com</p></a>
        </section>
    );
};