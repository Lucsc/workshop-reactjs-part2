import { useEffect } from "react";
import axios from 'axios';


function Countries() {
    useEffect (() => {
        console.log("Hello React");
    });
    return (
      <div className="countries">
        <h1>Countries</h1>
      </div>
    );
}

export default Countries;