import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";




export default class Newcontact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Contact_Owner: "",
      First_Name: "",
      Last_Name: "",
      Account_Name: "",
      Email: "",
      Phone: "",
      Other_Phone: "",
      Mobile: "",
      Assistant: "",
      Lead_Source: "",
      Mailing_State: "",
      Vendor_Name: "",
      Title: "",
      Department: "",
      Home_Phone: "",
      Fax: "",
      Date_of_Birth: "",
      Asst_Phone: "",
      Email_opt_out: "",
      Skype_ID: "",
      Secondary_Email: "",
      Twitter: "",
      Reporting_to: "",
      Mailing_street: "",
      Other_street: "",
      Mailing_city: "",
      Other_City: "",
      Other_State: "",
      Mailing_Zip: "",
      Other_Zip: "",
      Mailing_Country: "",
      Other_Country: "",
      Description: "",
    }
    this.handleusernameA = this.handleusernameA.bind(this)
    this.handleusernameB = this.handleusernameB.bind(this)

    this.handleusernameC = this.handleusernameC.bind(this)
    this.handleusernameD = this.handleusernameD.bind(this)

    this.handleusernameE = this.handleusernameE.bind(this)
    this.handleusernameF = this.handleusernameF.bind(this)
    this.handleusernameG = this.handleusernameG.bind(this)
    this.handleusernameH = this.handleusernameH.bind(this)
    this.handleusernameI = this.handleusernameI.bind(this)
    this.handleusernameJ = this.handleusernameJ.bind(this)
    this.handleusernameK = this.handleusernameK.bind(this)
    this.handleusernameL = this.handleusernameL.bind(this)
    this.handleusernameM = this.handleusernameM.bind(this)
    this.handleusernameN = this.handleusernameN.bind(this)
    this.handleusernameO = this.handleusernameO.bind(this)
    this.handleusernameP = this.handleusernameP.bind(this)
    this.handleusernameQ = this.handleusernameQ.bind(this)
    this.handleusernameR = this.handleusernameR.bind(this)
    this.handleusernameS = this.handleusernameS.bind(this)
    this.handleusernameT = this.handleusernameT.bind(this)
    this.handleusernameU = this.handleusernameU.bind(this)
    this.handleusernameV = this.handleusernameV.bind(this)
    this.handleusernameW = this.handleusernameW.bind(this)
    this.handleusernameX = this.handleusernameX.bind(this)
    this.handleusernameY = this.handleusernameY.bind(this)
    this.handleusernameZ = this.handleusernameZ.bind(this)
    this.handleusernameAA = this.handleusernameAA.bind(this)
    this.handleusernameAB = this.handleusernameAB.bind(this)
    this.handleusernameAC = this.handleusernameAC.bind(this)
    this.handleusernameAD = this.handleusernameAD.bind(this)
    this.handleusernameAE = this.handleusernameAE.bind(this)
    this.handleusernameAF = this.handleusernameAF.bind(this)
    this.handleusernameAG = this.handleusernameAG.bind(this)







    this.history = createBrowserHistory();
  }
  handleusernameA(e) {
    this.setState({
      Contact_Owner: e.target.value,


    })
    console.log(this.state.Contact_Owner)
  }
  handleusernameB(e) {
    this.setState({
      Lead_Source: e.target.value
    })
    console.log(this.state.Lead_Source)
  }
  handleusernameC(e) {
    this.setState({
      First_Name: e.target.value
    })
    console.log(this.state.First_Name)
  }
  handleusernameD(e) {
    this.setState({
      Last_Name: e.target.value
    })
    console.log(this.state.Last_Name)
  }
  handleusernameE(e) {
    this.setState({
      Account_Name: e.target.value
    })
    console.log(this.state.Account_Name)
  }
  handleusernameF(e) {
    this.setState({
      Vendor_Name: e.target.value
    })
    console.log(this.state.Vendor_Name)
  }
  handleusernameG(e) {
    this.setState({
      Email: e.target.value
    })
    console.log(this.state.Email)
  }
  handleusernameH(e) {
    this.setState({
      Title: e.target.value
    })
    console.log(this.state.Title)
  }
  handleusernameI(e) {
    this.setState({
      Phone: e.target.value
    })
    console.log(this.state.Phone)
  }
  handleusernameJ(e) {
    this.setState({
      Department: e.target.value
    })
    console.log(this.state.Department)
  }
  handleusernameK(e) {
    this.setState({
      Other_Phone: e.target.value
    })
    console.log(this.Other_Phone)
  }
  handleusernameL(e) {
    this.setState({
      Home_Phone: e.target.value
    })
    console.log(this.state.Home_Phone)
  }
  handleusernameM(e) {
    this.setState({
      Mobile: e.target.value
    })
    console.log(this.state.Mobile)
  }
  handleusernameN(e) {
    this.setState({
      Fax: e.target.value
    })
    console.log(this.state.Fax)
  }
  handleusernameO(e) {
    this.setState({
      Assistant: e.target.value
    })
    console.log(this.state.Assistant)
  }
  handleusernameP(e) {
    this.setState({
      Date_of_Birth: e.target.value
    })
    console.log(this.state.Date_of_Birth)
  }
  handleusernameQ(e) {
    this.setState({
      Asst_Phone: e.target.value
    })
    console.log(this.state.Asst_Phone)
  }
  handleusernameR(e) {
    this.setState({
      Email_opt_out: e.target.value
    })
    console.log(this.state.Email_opt_out)
  }
  handleusernameS(e) {
    this.setState({
      Skype_ID: e.target.value
    })
    console.log(this.state.Skype_ID)
  }
  handleusernameT(e) {
    this.setState({
      Secondary_Email: e.target.value
    })
    console.log(this.state.Secondary_Email)
  }
  handleusernameU(e) {
    this.setState({
      Twitter: e.target.value
    })
    console.log(this.state.Twitter)
  }
  handleusernameV(e) {
    this.setState({
      Reporting_to: e.target.value
    })
    console.log(this.state.Reporting_to)
  }
  handleusernameW(e) {
    this.setState({
      Mailing_street: e.target.value,
    })
    console.log(this.state.Mailing_street)
  }
  handleusernameX(e) {
    this.setState({
      Other_street: e.target.value
    })
    console.log(this.state.Other_street)
  }
  handleusernameY(e) {
    this.setState({
      Mailing_city: e.target.value
    })
    console.log(this.state.Mailing_city)
  }
  handleusernameZ(e) {
    this.setState({
      Other_City: e.target.value
    })
    console.log(this.state.Other_City)
  }
  handleusernameAA(e) {
    this.setState({
      Mailing_State: e.target.value
    })
    console.log(this.state.Mailing_State)
  }
  handleusernameAB(e) {
    this.setState({
      Other_State: e.target.value
    })
    console.log(this.state.Other_State)
  }
  handleusernameAC(e) {
    this.setState({
      Mailing_Zip: e.target.value
    })
    console.log(this.state.Mailing_Zip)
  }
  handleusernameAD(e) {
    this.setState({
      Other_Zip: e.target.value
    })
    console.log(this.state.Other_Zip)
  }
  handleusernameAE(e) {
    this.setState({
      Mailing_Country: e.target.value
    })
    console.log(this.state.Mailing_Country)
  }
  handleusernameAF(e) {
    this.setState({
      Other_Country: e.target.value
    })
    console.log(this.state.Other_Country)
  }
  handleusernameAG(e) {
    this.setState({
      Description: e.target.value,
    })
    console.log(this.state.Description)
  }
  resetform = () => {
    this.setState({

      Contact_Owner: "",
      First_Name: "",
      Last_Name: "",
      Account_Name: "",
      Email: "",
      Phone: "",
      Other_Phone: "",
      Mobile: "",
      Assistant: "",
      Lead_Source: "",
      Mailing_State: "",
      Vendor_Name: "",
      Title: "",
      Department: "",
      Home_Phone: "",
      Fax: "",
      Date_of_Birth: "",
      Asst_Phone: "",
      Email_opt_out: "",
      Skype_ID: "",
      Secondary_Email: "",
      Twitter: "",
      Reporting_to: "",
      Mailing_street: "",
      Other_street: "",
      Mailing_city: "",
      Other_City: "",
      Other_State: "",
      Mailing_Zip: "",
      Other_Zip: "",
      Mailing_Country: "",
      Other_Country: "",
      Description: "",
    });
  }
  // calling api using fetch method of javascript
  addUser = async (formData) => {
    await fetch('http://localhost:3000/contact-us', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(() => {
      this.resetform()
      this.setState({
        register: "Registered Successfully"
      })
      alert("Registered successfully.")
    }).catch((e) => {
      alert("something went wrong.")
    })
  }
  handlesubmit = (e) => {
    e.preventDefault();
    const { Contact_Owner, First_Name, Account_Name, Email, Phone, Other_Phone, Mobile, Assistant, Lead_Source, Last_Name, Vendor_Name, Title, Department, Home_Phone, Fax, Date_of_Birth, Asst_Phone, Email_opt_out, Skype_ID, Secondary_Email, Twitter, Reporting_to, Mailing_street, Other_street, Mailing_city, Other_City, Mailing_State, Other_State, Mailing_Zip, Other_Zip, Mailing_Country, Other_Country, Description } = this.state;
    const formData = {
      Contact_Owner, First_Name, Account_Name, Email, Phone, Other_Phone, Mobile, Assistant, Lead_Source, Last_Name, Vendor_Name, Title, Department, Home_Phone, Fax, Date_of_Birth, Asst_Phone, Email_opt_out, Skype_ID, Secondary_Email, Twitter, Reporting_to, Mailing_street, Other_street, Mailing_city, Other_City, Mailing_State, Other_State, Mailing_Zip, Other_Zip, Mailing_Country, Other_Country, Description
    }
    this.addUser(formData);
  }
  render() {
    console.log("h")
    return (
      <div>
        {!this.state.register ? <div >



<Form className='problem' onSubmit={this.handlesubmit}>

     <Row >
              <h3 className="text-primary">Contact Information</h3>
        <Row className="w-100 p-3" >

                <Col className='col-3 '>
        {/* <TextField id="fullName" label="Owner Name" /> */}

        <TextField id="outlined-basic"  variant="outlined" label="Contct Owner"
        input type="text"  value={this.state.Contact_Owner} onChange={this.handleusernameA} required   />    
                </Col>

                <Col className='col-3'>

                  < TextField id="outlined-basic"  variant="outlined" label="Lead Source"   input type="text"  value={this.state.Lead_Source} onChange={this.handleusernameB} required />
                </Col>
        </Row>



        <Row className="w-100 p-3" >
                <Col className='col-3'>
                 
                  <TextField id="outlined-basic"  variant="outlined" label="First Name" input type="text"  value={this.state.First_Name} onChange={this.handleusernameC} required />
                </Col>

                <Col className='col-3'>
                  <TextField id="outlined-basic"  variant="outlined" label="Last Name" input type="text"  value={this.state.Last_Name} onChange={this.handleusernameD} required />

                </Col>
         </Row>


         <Row className="w-100 p-3" >
                <Col className='col-3'>
                
                  < TextField id="outlined-basic"  variant="outlined" label="Account Name" type="text"  value={this.state.Account_Name} onChange={this.handleusernameE} required />
                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Vendor Name" input type="text"  value={this.state.Vendor_Name} onChange={this.handleusernameF} required />
                </Col>
        </Row>


          <Row className="w-100 p-3" >
                <Col className='col-3'>
                  <TextField id="outlined-basic"  variant="outlined" label="Email" input type="email"  value={this.state.Email} onChange={this.handleusernameG} required />
                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Title" input type="text"  value={this.state.Title} onChange={this.handleusernameH} required />

                </Col>            
          </Row>


          <Row className="w-100 p-3" >

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Phone" input type="number"  value={this.state.Phone} onChange={this.handleusernameI} required />
                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Department" input type="text" value={this.state.Department} onChange={this.handleusernameJ} required />
                </Col>
           </Row>


           <Row className="w-100 p-3" >

                <Col className='col-3'>

                  <TextField id="outlined-basic"  variant="outlined" label="Other Phone" input type="number" value={this.state.Other_Phone} onChange={this.handleusernameK} required />

                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Home Phone" input type="number" value={this.state.Home_Phone} onChange={this.handleusernameL} required />

                </Col>
          </Row>

           <Row className="w-100 p-3" >

                <Col className='col-3'>

                  < TextField id="outlined-basic"  variant="outlined" label="Mobile No" input type="number"  value={this.state.Mobile} onChange={this.handleusernameM} required />

                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Fax" input type="text"  value={this.state.Fax} onChange={this.handleusernameN} required />

                </Col>
           </Row>

      <Row className="w-100 p-3" >

                <Col className='col-3'>

                  < TextField id="outlined-basic"  variant="outlined" label="Assistant" input type="text" value={this.state.Assistant} onChange={this.handleusernameO} required />

                </Col>

                <Col className='col-3'>
                  <TextField id="outlined-basic"  variant="outlined" label="Date Of Birth" input type="text"  value={this.state.Date_of_Birth} onChange={this.handleusernameP} required />

                </Col>
              
            
          </Row>

          <Row className="w-100 p-3" >

                <Col className='col-3'>

                  < TextField id="outlined-basic"  variant="outlined" label="Assistant Phone" input type="number"  value={this.state.Asst_Phone} onChange={this.handleusernameQ} required />

                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined" label="Email Opt Out " input type="email"  value={this.state.Email_opt_out} onChange={this.handleusernameR} required />

                </Col>
          </Row>

          <Row className="w-100 p-3" >

                <Col className='col-3'>

                  <TextField id="outlined-basic"  variant="outlined" label="Skype ID" input type="text"  value={this.state.Skype_ID} onChange={this.handleusernameS} required />

                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined"  label="Secondary Email" input type="email"  value={this.state.Secondary_Email} onChange={this.handleusernameT} required />

                </Col>

            </Row>
 
 
            <Row className="w-100 p-3" >

                <Col className='col-3'>

                  < TextField id="outlined-basic"  variant="outlined"  label="Twitter" input type="text"  value={this.state.Twitter} onChange={this.handleusernameU} required />

                </Col>

                <Col className='col-3'>
                  < TextField id="outlined-basic"  variant="outlined"  label="Reporting To" input type="text"  value={this.state.Reporting_to} onChange={this.handleusernameV} required />

                </Col>



<h3 className="text-primary mt-3">Address Information</h3>


                <Row className="w-100 p-3" >

                  <Col className='col-3'>

                    <TextField id="outlined-basic"  variant="outlined"  label="Mailing State" input type="text"  value={this.state.Mailing_street} onChange={this.handleusernameW} required />
                  </Col>

                  <Col className='col-3'>
                    <TextField id="outlined-basic"  variant="outlined"  label="Other State" input type="text"  value={this.state.Other_street} onChange={this.handleusernameX} required />
                  </Col>

                </Row>

                <Row className="w-100 p-3" >

                  <Col className='col-3'>

                    <TextField id="outlined-basic"  variant="outlined"  label="Mailing City" input type="text"  value={this.state.Mailing_city} onChange={this.handleusernameY} required />
                  </Col>

                  <Col className='col-3'>
                    <TextField id="outlined-basic"  variant="outlined"  label="Other City" input type="text"  value={this.state.Other_City} onChange={this.handleusernameZ} required />
                  </Col>

                </Row>

                <Row className="w-100 p-3" >

                  <Col className='col-3'>

                    <TextField id="outlined-basic"  variant="outlined"  label="Mailing State" input type="text"  value={this.state.Mailing_State} onChange={this.handleusernameAA} required />
                  </Col>

                  <Col className='col-3'>
                    <TextField id="outlined-basic"  variant="outlined"  label="Other State" input type="text"  value={this.state.Other_State} onChange={this.handleusernameAB} required />
                  </Col>

                </Row>


                <Row className="w-100 p-3" >

                  <Col className='col-3'>

                    <TextField id="outlined-basic"  variant="outlined"  label="Mailing Zip" input type="number"  value={this.state.Mailing_Zip} onChange={this.handleusernameAC} required />
                  </Col>

                  <Col className='col-3'>
                    <TextField id="outlined-basic"  variant="outlined"  label="Other Zip" input type="number"  value={this.state.Other_Zip} onChange={this.handleusernameAD} required />
                  </Col>

                </Row>


                <Row className="w-100 p-3" >

                  <Col className='col-3'>

                    <TextField id="outlined-basic"  variant="outlined"  label="Mailing Country" input type="text"  value={this.state.Mailing_Country} onChange={this.handleusernameAE} required />
                  </Col>

                  <Col className='col-3'>
                    <TextField id="outlined-basic"  variant="outlined"  label="Other Country" input type="text" value={this.state.Other_Country} onChange={this.handleusernameAF} required />
                  </Col>

                </Row>

<h3 className="text-primary">Description</h3>

                <Row>
                  <Col className='col-3' >

                    <TextField id="outlined-basic"  variant="outlined" 
                     label="Describe Here !" input type='text'  value={this.state.Description} onChange={this.handleusernameAG} />

                  </Col>
                </Row>

                
                </Row>
                
</Row>
        <button className = "frooti" type="submit">Submit</button>

</Form>
      </div > :
          <Navigate to="/" />
        }
      </div>
    )
  }
}

