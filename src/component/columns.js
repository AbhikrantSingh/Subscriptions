import {format} from 'date-fns'
import { ColumnFilter } from './ColumnFilter'


const handleRowClick = () => row => { 
    console.log(row.target.value); 
 }
export const COLUMNS =  
[

    {
        Header:'Status',
        Footer:'Status',
        accessor:'is_Enabled', 
        Cell: ({ cell }) => (
            <input type="button"  onClick={handleRowClick(cell.row.values.is_Enabled)}
             value={cell.row.values.is_Enabled==true?"TurnOn":"TurnOff"} 
           
            >  
            
            </input>
        ),
        Filter:ColumnFilter,
        disableFilters: true
    },
    {
        Header:'SubscriptionName',
        Footer:'SubscriptionName',
        accessor:'subscription_Name',
        Filter:ColumnFilter
    }
    /*,
    {
        Header:'utcFirstBackOfftimeStampString',
        Footer:'utcFirstBackOfftimeStampString',
        accessor:"utcFirstBackOfftimeStampString",
        Filter:ColumnFilter,
        disableFilters: true
  
    }
*/
]
