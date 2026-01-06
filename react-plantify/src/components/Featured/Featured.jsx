import './Featured.css'
import { featured1, featured2, featured3, featured4} from '../../assets/images'

const Featured = () => {
    return (
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section__title">Featured</h2>

                    <a href="" class="section__link">view all</a>
                </div>
                <div class="section-body">
                    <div class="featured">
                        <div class="featured-item">
                            <img src={featured1} alt="" class="featured-item__image"/>
                                <div class="featured-item__info">
                                    <h3 class="featured-item__title">Peperomia Ginny</h3>
                                    <span class="featured-item__price">$25</span>
                                </div>
                                <div class="featured-item__actions">
                                    <div class="color">
                                        <h4 class="color__title">Pot color</h4>

                                        <div class="color-items">
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                        </div>
                                    </div>

                                    <button class="btn btn-border-primary">buy</button>
                                </div>
                        </div>
                        <div class="featured-item">
                            <img src={featured2} alt="" class="featured-item__image"/>
                                <div class="featured-item__info">
                                    <h3 class="featured-item__title">Peperomia Ginny</h3>
                                    <span class="featured-item__price">$25</span>
                                </div>
                                <div class="featured-item__actions">
                                    <div class="color">
                                        <h4 class="color__title">Pot color</h4>

                                        <div class="color-items">
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                        </div>
                                    </div>

                                    <button class="btn btn-border-primary">buy</button>
                                </div>
                        </div>
                        <div class="featured-item">
                            <img src={featured3} alt="" class="featured-item__image"/>
                                <div class="featured-item__info">
                                    <h3 class="featured-item__title">Peperomia Ginny</h3>
                                    <span class="featured-item__price">$25</span>
                                </div>
                                <div class="featured-item__actions">
                                    <div class="color">
                                        <h4 class="color__title">Pot color</h4>

                                        <div class="color-items">
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                        </div>
                                    </div>

                                    <button class="btn btn-border-primary">buy</button>
                                </div>
                        </div>
                        <div class="featured-item">
                            <img src={featured4} alt="" class="featured-item__image"/>
                                <div class="featured-item__info">
                                    <h3 class="featured-item__title">Peperomia Ginny</h3>
                                    <span class="featured-item__price">$25</span>
                                </div>
                                <div class="featured-item__actions">
                                    <div class="color">
                                        <h4 class="color__title">Pot color</h4>

                                        <div class="color-items">
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                            <span class="color-item"></span>
                                        </div>
                                    </div>

                                    <button class="btn btn-border-primary">buy</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured