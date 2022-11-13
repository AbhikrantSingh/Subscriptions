import {format} from 'date-fns'
import { ColumnFilter } from './ColumnFilter'



export const COLUMNS =  
[

    {
        Header:'Status',
        Footer:'Status',
        accessor:'is_Enabled', 
        Cell: ({ cell }) => (
            <input type="button" value={cell.row.values.is_Enabled==true?"TurnOn":"TurnOff"} 
           
            >              
            </input>
        ),
        Filter:ColumnFilter,
        disableFilters: true
    },
    {
        Header:'SubscriptionName',
        Footer:'SubscriptionName',
        accessor:'subscriptionName',
        Filter:ColumnFilter
    },
    {
        Header:'utcFirstBackOfftimeStampString',
        Footer:'utcFirstBackOfftimeStampString',
        accessor:"utcFirstBackOfftimeStampString",
        Filter:ColumnFilter,
        disableFilters: true
  
    }
]
