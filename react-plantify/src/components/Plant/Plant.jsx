import './Plant.css'
import { plant1, plant2, plant3 } from '../../assets/images'
import { FaLongArrowAltRight } from "react-icons/fa";

const Plant = () => {
    return (
        <section className="section section-plant">
            <div className="container">
                <div className="section-header">
                    <h2 className="section__title">Plant stands</h2>
                </div>
                <div className="section-body-plant">
                    <div >
                        <img src={plant1} alt="" className="featured-item__image" />
                    </div>
                    <div >
                        <img src={plant2} alt="" className="featured-item__image" />
                    </div>

                    <div >
                        <img src={plant3} alt="" className="featured-item__image" />
                    </div>
                    <a href="" className="section__link arrow">more <FaLongArrowAltRight /></a>

                </div>
            </div>

        </section >
    )
}

export default Plant