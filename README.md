
Contact Management App

This is a simple contact management application built using React, Redux Toolkit, and React Bootstrap. It allows users to view, add, update, and delete contacts.

Features:

View a list of contacts with their names, email addresses, phone numbers, and cities.
Add a new contact by providing first name, last name, email address, phone number, and city.
Update an existing contact's details.
Delete a contact from the list.
Technologies Used:

React: A JavaScript library for building user interfaces.
Redux Toolkit: A Redux library that provides utilities to simplify Redux development.
React Bootstrap: A front-end framework that provides pre-designed UI components.
HTML/CSS: For structuring and styling the application.
Setup:

Clone the repository: git clone <repository-url>
Install dependencies: npm install
Start the development server: npm start
File Structure:

index.js: Entry point of the application.
App.js: Main application component that renders other components.
Components/Contact.js: Component for displaying and managing contacts.
Components/Navbar.js: Component for the navigation bar with branding.
Redux/contactReducer.js: Redux slice for managing contacts, including async thunks and reducers.
Redux/store.js: Redux store configuration.
Components/UpdateModal.js: Component for a modal used to update contact details.
Components/ExpressionForm.js: Component for a form used to add new contacts.
index.css: Stylesheet for the application.
Usage:

View the list of contacts on the main page.
Use the form to add a new contact by providing the required details and clicking "Add Contact".
Click the edit icon next to a contact to update its details using the modal.
Click the delete icon next to a contact to remove it from the list.
