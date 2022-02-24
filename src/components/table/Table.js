import styled from "styled-components";
import React from "react";

const Table = ({data, columns}) => {
    const headers = columns.map(column => column.header);
    console.log(columns)
    return (
        <TableWrapper>
            <thead>
            <tr>
                {headers.map(header => (
                    <div>{header}</div>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((datum, index) => (
                <tr key={index}>
                    <td>{columns[index].hasOwnProperty('accessor') && columns[index].accessor(datum)}</td>
                </tr>
            ))}
            </tbody>
        </TableWrapper>
    )
}

const TableWrapper = styled('table')`
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;

  thead {
    th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }
  }

  td, th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
`
export default Table;