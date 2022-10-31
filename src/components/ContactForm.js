import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function ContactForm() {
  
  
  return (

    <Form >
      <h3 className="text-primary">Contact Information</h3>
<Row>
      
<Row className="w-100 p-3"  >
      <Col className='col-1'>
            <Form.Control input type= "text" placeholder="Contact Owner" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text"  placeholder="Lead Sources" required  />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text"  placeholder="First Name" required  />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text"  placeholder="Last Name" required />
      </Col>

</Row>

<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text"  placeholder="Account Name"required  />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text"  placeholder="Vendor Name" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "email" placeholder="Email" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text"  placeholder="Title" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "number"  placeholder="Phone" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text"  placeholder="Department" required />
      </Col>

</Row>



<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "number"  placeholder="Other Phone" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "number"  placeholder="Home Phone" required />
      </Col>

</Row>



<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "number"  placeholder="Mobile" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text"  placeholder="Fax" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text"  placeholder="Assistant"required  />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "number"  placeholder="Date Of Birth" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "number"  placeholder="Asst Phone" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "email" placeholder="Email Opt Out" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text"  placeholder="Skype ID"  required/>
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "email" placeholder="Secondary Email"required  />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text" placeholder="Twitter" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text" placeholder="Reporting To"required  />
      </Col>

</Row>

</Row>    

<Row>
<h3 className="text-primary">Address Information</h3>

<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text" placeholder="Mailing Street" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text" placeholder="Other Street" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text" placeholder="Mailing City" required />
      </Col>

      <Col className='col-1'>
          <Form.Control input type= "text" placeholder="Other City" required />
      </Col>

</Row>

<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control input type= "text" placeholder="Mailing State"required  />
      </Col>

      <Col className='col-1'>
          <Form.Control  input type= "text" placeholder="Other State" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control  input type= "number" placeholder="Mailing Zip" required />
      </Col>

      <Col className='col-1'>
          <Form.Control  input type= "number" placeholder="Other Zip" required />
      </Col>

</Row>


<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control  input type= "text" placeholder="Mailing Country"required  />
      </Col>

      <Col className='col-1'>
          <Form.Control  input type= "text" placeholder="Other Country" required />
      </Col>

</Row>


</Row>


<Row>
<h3 className="text-primary">Description</h3>

<Row  className="w-100 p-3" >
    
      <Col className='col-1'>

          <Form.Control   input type= "text"  placeholder="Description  !" />
      </Col>

</Row>

</Row>

<button type="button" className="btn btn-primary my-50">Primary</button>

</Form> 
  );
}

export default ContactForm;