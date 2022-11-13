import React,{useMemo} from 'react'

import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'



export const BasicTable = () => {
  
    const columns =useMemo(() => COLUMNS,[]) //use for rendering the table only 1st tym.
    const data = useMemo(()=> MOCK_DATA,[])
  
    const tableInstance = useTable({
        columns,
        data
  })
  
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = tableInstance
    

  

}
