import { useState } from "react";
import { BasicTable } from "./component/BasicTable";
import { BasicTable2 } from "./component/BasicTable2";
import { SortingTable } from "./component/SortingTable";
import {PaginationTable} from './component/PaginationTable';
import { FilteringTable } from "./component/FilteringTable";
import {RowSelection} from "./component/RowSelection";
 export default function App() {
 
   
   return (
     <div className="App">
       <h1>InvoiceSmash Subscription Name</h1>
      <RowSelection></RowSelection>
     </div>
   );
 }