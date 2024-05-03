/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const FilterBar = ({filter, setFilter}) => {
    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    };

    return(
        <div> 
            <label htmlFor="filter">
            <input 
                type="text"
                id="filter" 
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search by name..."
            />

            </label>
        </div>
    );
};

export default FilterBar;