import React, { useEffect, useState } from "react";
import  './dataticket.css'
  const Formdata=()=>{
	const [data, setData] = useState([]);
	useEffect(() => {
		// fetching api of contact form from local db.json file
		fetch('http://localhost:3000/contact-us').then((res) => res.json()).then((response) => setData(response));
	}, [])
	
    return (
        <div className="cup">
            <h3 style={{color : "blue", marginTop : "10px"}}>User Deatails</h3>

      <table className="table2">
     <thead>
     	<tr>
		 {/* <th><input type="checkbox"/></th> */}
         <th>id</th>
       	 <th>Contact_Owner</th>
     	 <th>Email</th>
        <th>Phone</th>
        <th>Mobile</th>
        <th>Department</th>
        <th>Fax</th>
        <th>Skype_ID</th>



     	</tr>
     </thead>
     
     <tbody>
	 {	
			data.length && data.map((tbdata)=>{
				const {id,Contact_Owner,Email,Phone,Mobile,Department,Fax,Skype_ID}=tbdata;
				return(
					<>
						<tr>
						{/* <td><input type="checkbox" className="check"/></td>  */}
						<td >{id}</td>
                        <td >{Contact_Owner}</td>
						<td >{Email}</td>
						<td >{Phone}</td>
                        <td >{Mobile}</td>
						<td >{Department}</td>
                        <td >{Fax}</td>
                        <td >{Skype_ID}</td>



                        


</tr>




					</>

                    
			 )
			})
	 		
		}
     </tbody>
     
   </table>
   
<div>
<h3 style={{color : "blue"}}>Contact Information</h3>
<table className="table2">
     <thead>
     <tr>
		 {/* <th><input type="checkbox"/></th> */}
        <th>Lead_Source</th>
     	 <th>First_Name</th>
        <th>Last_Name</th>
        <th>Account_Name</th>
        <th>Vendor_Name</th>
        <th>Title</th>
        <th>Assistant</th>

        
      
     	</tr>
     </thead>
     <tbody>
	 {	
			data.length && data.map((tbdata)=>{
				const {First_Name, Account_Name, Lead_Source,Last_Name,Vendor_Name,Title,Assistant}=tbdata;
				return(
					<>
	
    <tr>
						{/* <td><input type="checkbox" className="check"/></td>  */}
						<td  >{tbdata.Lead_Source}</td>
                        <td  >{tbdata.First_Name}</td>
						<td  >{tbdata.Last_Name}</td>
                        <td  >{tbdata.Account_Name}</td>
						<td  >{tbdata.Vendor_Name}</td>
						<td  >{tbdata.Title}</td>
                        <td  >{tbdata.Assistant}</td>


					</tr>



					</>

                    
			 )
			})
	 		
		}
     </tbody>
     </table>




</div>
   </div>

    );
  }
  export default Formdata;