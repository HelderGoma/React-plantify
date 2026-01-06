import './Search.css'
import { FaSearch } from "react-icons/fa";
import { TbFilterSearch } from "react-icons/tb";
const Search = () => {
    return (

        <section className="special">
            <div className="container">
                <div className="special-body">
                    <div className="search">
                        <button className="btn btn-icon btn-border-primary">
                            <TbFilterSearch />
                        </button>

                        <input type="text" className="search__input" placeholder="Search flowers..." />

                        <button className="btn btn-icon btn-border-primary">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search