import './Colorful.css'
import { arrivals1, arrivals2, arrivals3, arrivals4 } from '../../assets/images'

const Colorful = () => {
    return (

        <section className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section__title">Colorful New Arrivals</h2>

                    <a href="" className="section__link">view all</a>
                </div>
                <div className="section-body-color">
                    <div >
                        <img src={arrivals1} alt="" className="featured-item__image" />
                    </div>
                    <div >
                        <img src={arrivals2} alt="" className="featured-item__image" />
                    </div>

                    <div >
                        <img src={arrivals3} alt="" className="featured-item__image" />
                    </div>

                    <div >
                        <img src={arrivals4} alt="" className="featured-item__image" />
                    </div>

                </div>
            </div>

        </section >
    )
}

export default Colorful