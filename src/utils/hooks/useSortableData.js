import React, {useState} from "react";
import {SORT_ORDER} from "../types";

const useSortableData = (data = []) => {
    const [sortBy, setSortBy] = useState('');
    const [sortDirection, setSortDirection] = useState('');

    const sortedData = React.useMemo(() => {
        let sortedData = data;
        if (sortBy !== '') {
            sortedData.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return sortDirection === SORT_ORDER.ASC ? -1 : 1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return sortDirection === SORT_ORDER.ASC ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedData;
    }, [data, sortBy, sortDirection]);

    const requestSort = key => {
        let direction = SORT_ORDER.ASC;
        if (sortBy === key && sortDirection === SORT_ORDER.ASC) {
            direction = SORT_ORDER.DESC;
        }
        setSortBy(key);
        setSortDirection(direction);
    }

    return {data: sortedData, requestSort, sortDirection, sortBy};
}
export default useSortableData;