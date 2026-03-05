import './Search.css'
import { FaSearch } from "react-icons/fa";
import { TbFilterSearch } from "react-icons/tb";
import { useState } from "react";

const Search = ({
    query,
    onQueryChange,
    suggestions,
    onSelectSuggestion,
    filters,
    onFiltersChange,
}) => {
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (name, value) => {
        onFiltersChange({ ...filters, [name]: value });
    };

    return (

        <section className="special" id="search-section">
            <div className="container">
                <div className="special-body">
                    <div className="search">
                        <button
                            type="button"
                            className="btn btn-icon btn-border-primary"
                            onClick={() => setShowFilters((prev) => !prev)}
                            aria-label="Toggle filters"
                        >
                            <TbFilterSearch />
                        </button>

                        <div className="search-field">
                            <input
                                type="text"
                                className="search__input"
                                placeholder="Search flowers..."
                                value={query}
                                onChange={(event) => onQueryChange(event.target.value)}
                            />
                            {suggestions.length > 0 && (
                                <div className="search-suggestions">
                                    {suggestions.map((item) => (
                                        <button
                                            type="button"
                                            key={item.id}
                                            className="suggestion-item"
                                            onClick={() => onSelectSuggestion(item.name)}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button type="button" className="btn btn-icon btn-border-primary" aria-label="Run search">
                            <FaSearch />
                        </button>
                    </div>
                    {showFilters && (
                        <div className="filter-panel">
                            <label>
                                Category
                                <select
                                    value={filters.category}
                                    onChange={(event) => handleFilterChange("category", event.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="featured">Featured</option>
                                    <option value="arrival">Arrivals</option>
                                    <option value="stand">Stands</option>
                                </select>
                            </label>
                            <label>
                                Max price: ${filters.maxPrice}
                                <input
                                    type="range"
                                    min="15"
                                    max="70"
                                    step="1"
                                    value={filters.maxPrice}
                                    onChange={(event) => handleFilterChange("maxPrice", Number(event.target.value))}
                                />
                            </label>
                            <label>
                                Light
                                <select
                                    value={filters.light}
                                    onChange={(event) => handleFilterChange("light", event.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="bright">Bright</option>
                                </select>
                            </label>
                            <label>
                                Size
                                <select
                                    value={filters.size}
                                    onChange={(event) => handleFilterChange("size", event.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </label>
                            <label className="checkbox-filter">
                                <input
                                    type="checkbox"
                                    checked={filters.beginnerOnly}
                                    onChange={(event) => handleFilterChange("beginnerOnly", event.target.checked)}
                                />
                                Beginner-friendly only
                            </label>
                            <label className="checkbox-filter">
                                <input
                                    type="checkbox"
                                    checked={filters.petFriendly}
                                    onChange={(event) => handleFilterChange("petFriendly", event.target.checked)}
                                />
                                Pet-friendly only
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Search