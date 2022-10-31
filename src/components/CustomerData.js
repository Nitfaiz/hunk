import React, { Component } from 'react'
import {  Navigate } from 'react-router-dom'
import { createBrowserHistory } from "history";
export default class CustomerData extends Component {



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
      <div className='createcontact'>
        {!this.state.register ? <div className='form-container1'>
          <h1 className='headingone'>Contact Information</h1>
          <form className='registor-form' onSubmit={this.handlesubmit}>

            <div className='styling1'>

              <label>Contact Owner:</label>
              <input type="text" placeholder='Enter Owner Name' value={this.state.Contact_Owner} onChange={this.handleusernameA} required className="form-field1" />
            </div>
            <div className='styling2'>
              <label>Lead Source:</label>
              <input type="number" placeholder='Enter Score' value={this.state.Lead_Source} onChange={this.handleusernameB} required className="form-field2" />
            </div>
            <div className='styling3'>
              <label>First Name:</label>
              <input type="text" placeholder='Enter Your First Name' value={this.state.First_Name} onChange={this.handleusernameC} required className="form-field3" />
            </div>
            <div className='styling4'>
              <label>Last Name:</label>
              <input type="text" placeholder='Enter Last Name' value={this.state.Last_Name} onChange={this.handleusernameD} required className="form-field4" />
            </div>

            <div className='styling5'>
              <label> Account Name:</label>
              <input type="text" placeholder='Enter  Account Name' value={this.state.Account_Name} onChange={this.handleusernameE} required className="form-field5" />
            </div>
            <div className='styling6'>
              <label> Vendor Name:</label>
              <input type="text" placeholder=' Vendor Name' value={this.state.Vendor_Name} onChange={this.handleusernameF} required className="form-field6" />
            </div>
            <div className='styling7'>

              <label> Email:</label>
              <input type="email" placeholder='Enter Your Email' value={this.state.Email} onChange={this.handleusernameG} required className="form-field7" />
            </div>
            <div className='styling8'>

              <label> Title:</label>
              <input type="text" placeholder=' Title' value={this.state.Title} onChange={this.handleusernameH} required className="form-field8" />
            </div>
            <div className='styling9'>

              <label> Phone:</label>
              <input type="number" placeholder='Enter Your Phone no' value={this.state.Phone} onChange={this.handleusernameI} required className="form-field9" />
            </div>
            <div className='styling10'>
              <label> Department:</label>
              <input type="text" placeholder=' Department' value={this.state.Department} onChange={this.handleusernameJ} required className="form-field10" />    </div>

            <div className='styling11'>
              <label> Other Phone:</label>
              <input type="number" placeholder='Enter  Other Phone No ' value={this.state.Other_Phone} onChange={this.handleusernameK} required className="form-field11" /></div>

            <div className='styling12'>
              <label>Home Phone:</label>
              <input type="number" placeholder=' Title' value={this.state.Home_Phone} onChange={this.handleusernameL} required className="form-field12" /></div>

            <div className='styling13'>
              <label>Mobile:</label>
              <input type="number" placeholder='Enter Mobile No ' value={this.state.Mobile} onChange={this.handleusernameM} required className="form-field13" /></div>

            <div className='styling14'>
              <label> Fax:</label>
              <input type="text" placeholder='Fax ' value={this.state.Fax} onChange={this.handleusernameN} required className="form-field14" /></div>

            <div className='styling15'>
              <label>Assistant:</label>
              <input type="text" placeholder='Assistent details ' value={this.state.Assistant} onChange={this.handleusernameO} required className="form-field15" />
            </div>
            <div className='styling16'>
              <label>Date of Birth:</label>
              <input type="text" placeholder='Enter DOB' value={this.state.Date_of_Birth} onChange={this.handleusernameP} required className="form-field16" /></div>

            <div className='styling17'>
              <label>Asst Phone:</label>
              <input type="number" placeholder=' Enter Number' value={this.state.Asst_Phone} onChange={this.handleusernameQ} required className="form-field17" /></div>


            <div className='styling18'>
              <label>Email opt out:</label>
              <input type="email" placeholder=' Enter Email ' value={this.state.Email_opt_out} onChange={this.handleusernameR} required className="form-field18" /></div>

            <div className='styling19'>
              <label>Skype ID:</label>
              <input type="number" placeholder='Skype ID' value={this.state.Skype_ID} onChange={this.handleusernameS} required className="form-field19" /> </div>

            <div className='styling20'>

              <label>Secondary Email:</label>
              <input type="email" placeholder=' Enter Secondary Email' value={this.state.Secondary_Email} onChange={this.handleusernameT} required className="form-field20" />  </div>


            <div className='styling21'>
              <label>Twitter:</label>
              <input type="text" placeholder=' Twitter Id' value={this.state.Twitter} onChange={this.handleusernameU} required className="form-field21" />
            </div>

            <div className='styling22'>
              <label>Reporting to:</label>
              <input type="text" placeholder=' Report Here !' value={this.state.Reporting_to} onChange={this.handleusernameV} required className="form-field22" />
            </div>

            <h1 className='headingsecond'>Address Information</h1>

            <div className='styling23'>

              <label>Mailing Street:</label>
              <input type="text" placeholder='Enter Mailing street' value={this.state.Mailing_street} onChange={this.handleusernameW} required className="form-field1" />   </div>
            <div className='styling24'>
              <label>Other  Street:</label>
              <input type="text" placeholder='Enter Your Other Street' value={this.state.Other_street} onChange={this.handleusernameX} required className="form-field2" />

            </div>

            <div className='styling25'>

              <label>Mailing City:</label>
              <input type="text" placeholder='Enter Your Mailing  City' value={this.state.Mailing_city} onChange={this.handleusernameY} required className="form-field2" />
            </div>

            <div className='styling26'>


              <label>Other City:</label>
              <input type="text" placeholder='Enter Your  Other City' value={this.state.Other_City} onChange={this.handleusernameZ} required className="form-field3" />
            </div>

            <div className='styling27'>
              <label>Mailing State:</label>
              <input type="text" placeholder='Enter Your Mailing State' value={this.state.Mailing_State} onChange={this.handleusernameAA} required className="form-field1" />

            </div>

            <div className='styling28'>

              <label>Other State:</label>
              <input type="text" placeholder='Enter Your Other State' value={this.state.Other_State} onChange={this.handleusernameAB} required className="form-field2" />

            </div>

            <div className='styling29'>


              <label> Mailing Zip:</label>
              <input type="number" placeholder='Enter  Mailing Zip' value={this.state.Mailing_Zip} onChange={this.handleusernameAC} required className="form-field4" />
            </div>

            <div className='styling30'>


              <label>Other  Zip:</label>
              <input type="number" placeholder='Enter Your Other Zip' value={this.state.Other_Zip} onChange={this.handleusernameAD} required className="form-field4" />
            </div>

            <div className='styling31'>


              <label> Mailing Country:</label>
              <input type="text" placeholder='Enter  Mailing Country' value={this.state.Mailing_Country} onChange={this.handleusernameAE} required className="form-field2" />
            </div>

            <div className='styling32'>


              <label>Other Country:</label>
              <input type="text" placeholder='Enter Other Country' value={this.state.Other_Country} onChange={this.handleusernameAF} required className="form-field4" />
            </div>





            <br></br>
            <br></br>


            <div className='sign-up'>

              <h1 className='headingthird'> Description</h1>


              <div className='styling33'>

                <label>Description:</label>
                <input type="text-area" placeholder='Describe Here !' value={this.state.Description} onChange={this.handleusernameAG} required className="form-field45" />
              </div>
            </div>
            <button>Submit</button>

          </form>

        </div > :
          <Navigate to="/" />
        }
      </div>
    )
  }
}

