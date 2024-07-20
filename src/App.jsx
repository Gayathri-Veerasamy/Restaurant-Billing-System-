// import './index.css'
// import { Link } from 'react-router-dom';
// import Admin from './components/Admin';
// import Admin_to_show from './components/Admin_to_show';
// import User from '/src/components/User.jsx';

// function App() {
//   return(
//     <div className='bg'>
// <div className='logo'>
//   <img src='src/images/icons8-chef-64 (1).png' alt='logo'></img>
// </div>
// <div className='start_btn_container'>
//   <p id='heading'>"Streamline Your Restaurant Billing with Ease"
// </p>
// <p id='content'>Efficient, Accurate, and User-Friendly Billing Solutions for Your Restaurant</p>
// <Link to="/Admin" ><button  id='start_btn' >Get Started></button></Link>
// <Link to="/Admin_to_show" ><button  id='start_btn' >Get Started></button></Link>
// <Link to="/User" ><button  id='start_btn' >Get Started></button></Link>
// </div>

// </div>

//   )
// }

// export default App
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Admin from './components/Admin';
import Admin_to_show from './components/Admin_to_show';
import User from './components/User';

function App() {
  return (
    <div className="bg">
      <div className="logo">
        <img src="src/images/icons8-chef-64 (1).png" alt="logo" />
      </div>
      <div className="start_btn_container">
        <p id="heading">"Streamline Your Restaurant Billing with Ease"</p>
        <p id="content">Efficient, Accurate, and User-Friendly Billing Solutions for Your Restaurant</p>
        {/* <Link to="/Admin"><button id="start_btn">Get Started</button></Link>
        <Link to="/Admin_to_show"><button id="start_btn">Get Started</button></Link> */}
        <Link to="/User"><button id="start_btn">Get Started</button></Link>
      </div>
    </div>
  );
}

export default App;
