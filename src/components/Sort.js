export default function Sort({sortBy, setSortBy}) {

    function toggleSortOrder(order) {
        switch (order) {
            case null:
                return 'ascending';
            case 'ascending':
                return 'descending';
            case 'descending':
                return 'ascending'
            default:
                return null;
        }
    }

    function handleClick(e) {
        const sortField = e.target.name;
        const sortOrder = toggleSortOrder(sortBy.order)
        setSortBy({
            'field': sortField,
            'order': sortOrder,
        })
    }

    return (
        <div className="sortbar">
            <button name="location" onClick={handleClick}>Sort by location</button>
            <button name="description" onClick={handleClick}>Sort by description</button>
            <button name="id" onClick={handleClick}>Sort by id</button>
        </div>
    )
}