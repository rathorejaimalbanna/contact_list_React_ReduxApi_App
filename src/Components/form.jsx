import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addContactAsync } from '../Redux/contactReducer';

// Component for adding a new contact
function ExpressionForm() {
  const dispatch = useDispatch();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const city = useRef();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Combine first name and last name to create full name
    const fullName = firstName.current.value + ' ' + lastName.current.value;
    // Prepare data object with contact details
    const data = {
      name: fullName,
      city: city.current.value,
      phone: phone.current.value,
      email: email.current.value
    };
    dispatch(addContactAsync(data)); // Dispatch action to add contact
    // Clear input fields after submission
    firstName.current.value = "";
    lastName.current.value = "";
    city.current.value = "";
    phone.current.value = "";
    email.current.value = "";
  };

  // Render JSX
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Form group for first name */}
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            ref={firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* Form group for last name */}
        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            ref={lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* Form group for email */}
        <Form.Group as={Col} md="4">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              ref={email}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/* Form group for city */}
        <Form.Group as={Col} md="6">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" ref={city} required />
          <Form.Control.Feedback type="invalid">Please provide a city.</Form.Control.Feedback>
        </Form.Group>
        {/* Form group for phone */}
        <Form.Group as={Col} md="6">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" ref={phone} required />
          <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* Button to submit form */}
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}

export default ExpressionForm;
