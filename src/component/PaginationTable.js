import React,{useMemo} from 'react'

import {useTable,
   useSortBy,usePagination,
   useFilters, 
   useGlobalFilter,
   useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './style.css'
import { GlobalFilter } from './GlobalFilter'
import { Checkbox } from './Checkbox'

import { ColumnFilter } from './ColumnFilter'
export  const PaginationTable=()=> {
    
    const columns =useMemo(() => COLUMNS,[]) //use for rendering the table only 1st tym.
    const data = useMemo(()=> MOCK_DATA,[])
  
    const defaultColumn = React.useMemo(
      () => ({
        Filter: ColumnFilter
      }),
      []
    )
  
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        setGlobalFilter,
        setPageSize,
        prepareRow,
        selectedFlatRows
      } = useTable({
        columns,
        data,
        defaultColumn
      },
      useFilters,
      useGlobalFilter,
      useSortBy,usePagination,
      useRowSelect,
      hooks => {
        hooks.visibleColumns.push(columns => [
          {
            is_Enabled: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },
          ...columns
        ])
      }
  )


      const {pageIndex,pageSize,globalFilter} = state
     // const { globalFilter } = state
    return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
     <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
               {column.render('Header')}
               <div>{column.canFilter ? column.render('Filter') : null}</div>
               <span>
               {column.isSorted
                 ? column.isSortedDesc
                   ? ' 🔽'
                   : ' 🔼'
                 : ''} 
             </span>
               </th>

               ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        
      </table>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre>
      
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex+1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go To page: {' '}
          <input type='number' defaultValue={pageIndex + 1} onChange={e =>{
            const pageNumber= e.target.value ? Number(e.target.value) -1 :0 
            gotoPage(pageNumber)
          }} style={{width: '50px'}}></input>
        </span>
        <select value = {pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {
              [10,25,50].map(pageSize =>(
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))
          }
        </select>
        <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Prev</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=> gotoPage(pageCount -1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
       

    )
}
