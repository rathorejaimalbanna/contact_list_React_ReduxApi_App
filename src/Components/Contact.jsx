import React, { useEffect, useState } from 'react';
import "../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { contactAsync, contactSelectors, deleteContactAsync } from '../Redux/contactReducer.js';
import ExpressionForm from './form.jsx';
import UpdateModal from './modal.jsx';

// Functional component to display contacts and manage CRUD operations
export default function Contact() {
  // Select contacts from Redux store
  const {contacts} = useSelector(contactSelectors);
  const dispatch = useDispatch();
  const [show,setShow] =  useState(false); // State to manage modal visibility
  const [modalData,setModalData] = useState({name:"",city:"",email:"",phone:""}); // State to manage data for modal
  useEffect(()=>{
    // Fetch contacts from API when component mounts
    dispatch(contactAsync('https://jsonplaceholder.typicode.com/users'))
  },[dispatch]); // Dependency array ensures the effect runs only once

  // Function to close modal
  const handleClose = () => setShow(false);

  // Function to handle update operation
  function handleUpdate(item) {
    // Set data for modal based on selected contact
    setModalData({id:item.id,name:item.name,city:item.address.city,email:item.email,phone:item.phone})
    setShow(true); // Show modal
  }

  // Function to handle delete operation
  function handleDelete(item) {
    alert(`${item.name} contact has been deleted!`); // Alert user about deletion
    dispatch(deleteContactAsync(item)); // Dispatch action to delete contact
  };

  // Render JSX
  return (
    <div>
      {show && <div className='modalDiv'>
        <UpdateModal handleClose={handleClose} modalData={modalData} />
      </div>}
      <div className='formDiv'>
        <ExpressionForm/>
      </div>
      <div className='orders'>
        <div className="orderTable">
          <h2>Contact List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item)=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.city}</td>
                  <td>
                    {/* Button to delete contact */}
                    <button onClick={()=>handleDelete(item)} className='iconButtons'> 
                      <img src="./delete.png" alt="" className='icons'/> 
                    </button>
                    {/* Button to update contact */}
                    <button onClick={()=>handleUpdate(item)} className='iconButtons'> 
                      <img src="./edit.png" alt="" className='icons'/> 
                    </button>
                  </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
