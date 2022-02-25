import {COLUMNS_NAME, SORT_ORDER} from "../../../utils/types";
import Button from "../../../components/button";
import React from "react";
import styled from "styled-components";
import useSortableData from "../../../utils/hooks/useSortableData";
import {formatDate} from "../../../utils/helper";
import {useUserList} from "../../../utils/context/UsersProvider";

const Table = () => {
    const {isLoading, users, info: {page}, onChangePage, search} = useUserList();

    const {data, requestSort: onSort, sortBy, sortDirection} = useSortableData(users);
    const isSort = (key) => key ? sortBy === key : false;
    const headers = [COLUMNS_NAME.USERNAME, COLUMNS_NAME.NAME, COLUMNS_NAME.EMAIL, COLUMNS_NAME.GENDER, COLUMNS_NAME.REGISTERED];

    const isSearching = !!search.trim();
    return (
        <TableWrapper>
            <thead>
            <tr>
                {headers.map(header => (
                    <th key={header}>
                        <button
                            onClick={() => onSort(header)}>
                            {header}

                            <span>
                                {isSort(header) ?
                                    sortDirection === SORT_ORDER.ASC ? (
                                        ' 🔼'
                                    ) : (
                                        ' 🔽'
                                    ) :
                                    null
                                }
                            </span>
                        </button>
                    </th>
                ))}
            </tr>
            </thead>
            {isLoading ? (
                <tbody>
                <tr>
                    <td colSpan={5} className="center">Loading...</td>
                </tr>
                </tbody>
            ) : (
                <tbody>
                {data.length > 0 ? users.map(datum => (
                    <tr key={datum.cell}>
                        <td>{datum.username}</td>
                        <td>{datum.name}</td>
                        <td>{datum.email}</td>
                        <td>{datum.gender}</td>
                        <td>{formatDate(datum.registered)}</td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan={5} className="center">No row match</td>
                    </tr>
                )}
                </tbody>
            )}
            <tfoot>
            <tr>
                <td colSpan={4} className="info">
                    {!isLoading && (
                        <div>Page : {page}</div>
                    )}
                </td>
                <td className="action">
                    <Button onClick={() => onChangePage(page - 1)}
                            disabled={page === 1 || users.length === 0 || isSearching}>
                        Prev
                    </Button>
                    <Button onClick={() => onChangePage(page + 1)} disabled={users.length === 0 || isSearching}>
                        Next
                    </Button>
                </td>
            </tr>
            </tfoot>
        </TableWrapper>)
}


const TableWrapper = styled('table')`
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;

  thead {
    th {
      border-bottom: 2px solid #dee2e6;
      vertical-align: middle;

      button {
        background: transparent;
        border: none;
        font-weight: 700;
        cursor: pointer;
        font-size: 1em;
        text-transform: capitalize;
      }
    }
  }

  tfoot {
    td {
      &.info {
        font-weight: 700;
      }

      &.action {
        display: flex;
        gap: 8px;
        justify-content: right;
      }
    }
  }

  td, th {
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    vertical-align: middle;

    &.center {
      text-align: center;
    }
  }
`

export default Table;