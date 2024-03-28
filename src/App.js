import React from 'react';
import Contact from './Components/Contact';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import BrandExample from './Components/Navbar';

// Main application component
export default function App() {
  return (
    <div>
      {/* Render Navbar component */}
      <BrandExample />
      {/* Provide Redux store to components */}
      <Provider store={store}>
        {/* Render Contact component */}
        <Contact />
      </Provider>
    </div>
  );
}
