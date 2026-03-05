import './Header.css'
import { header1, header2, header3 } from '../../assets/images'
import Nav from '../Nav/Nav'

const Header = ({ cartCount, onOpenCart, onSearchFocus }) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Nav cartCount={cartCount} onOpenCart={onOpenCart} />
                    <section className="content">
                        <div className="header-info">
                            <h1 className="title">Happiness blooms from within</h1>
                            <p className="description">Our environment, the world in which we live and work, is a mirror of our
                                attitudes and expectations.</p>

                            <div className="actions">
                                <button className="btn btn-primary btn-large" onClick={onSearchFocus}>Shop now</button>
                                <a className="btn btn-link btn-large" href="#search-section" onClick={onSearchFocus}>Explore plants</a>
                            </div>
                        </div>
                        <div className="header-gallary">
                            <div className="item">
                                <span>New</span>
                                <img src={header1} alt="" />
                            </div>
                            <div className="item">
                                <span>Featured</span>
                                <img src={header2} alt="" />
                                {/* <div className="item-overlay">
                                    <h2>Anthurium Flower</h2>
                                    <p>
                                        The flower of human being. It has meaningful of fact that
                                        the plant always grow whatever season and weather...
                                    </p>
                                    <button className="btn btn-primary">READ MORE</button>
                                </div> */}
                            </div>
                            <div className="item">
                                <span>Popular</span>
                                <img src={header3} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header