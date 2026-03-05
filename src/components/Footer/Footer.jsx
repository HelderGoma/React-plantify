import './Footer.css'

const Footer = () => {
    return (
        <section className="section">
            <div className="container">
                <iframe
                    className="footer-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212271.62991192064!2d-84.5850160557322!3d33.76727497735425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2z0JDRgtC70LDQvdGC0LAsINCU0LbQvtGA0LTQttC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sby!4v1767716638349!5m2!1sru!2sby"
                    height="287"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Plantify location map"
                />
                <div className="map-actions">
                    <a
                        href="https://maps.google.com/?q=Atlanta"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-border-primary"
                    >
                        Open marker
                    </a>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Atlanta"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                    >
                        Build route
                    </a>
                </div>
            </div>

        </section >
    )
}

export default Footer