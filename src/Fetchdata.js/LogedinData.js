import React, { useEffect, useState } from "react";
import  './dataticket.css'
// import datas from './LogedinData.js';
// import datas from './db.json'
  const LogedinData=()=>{
	const [data, setData] = useState([]);
	useEffect(() => {
				// fetching api of  logedin user  from local db.json file

		fetch('http://localhost:3000/users').then((res) => res.json()).then((response) => setData(response));
	}, [])
	
    return (
      <table className="table">
     <thead>
     	<tr>
		 {/* <th><input type="checkbox"/></th> */}
       	 <th>Id</th>
     	 <th>Email</th>
     	 <th>Password</th>
     	</tr>
     </thead>
     <tbody>
	 
		{	
			data.length && data.map((tbdata)=>{
				const {id,email, password}=tbdata;
				return(
					<>
						<tr>
						<td data-label="S.No">{id}</td>
						<td data-label="Subject">{email}</td>
						<td data-label="Requester">{password}</td>
					</tr>
					</>
			 )
			})
	 		
		}
     </tbody>
   </table>

    );
  }
  export default LogedinData;