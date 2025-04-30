import logo from './logo.svg';
import './App.css';
import { Card, Button } from "react";

function App() {
  return (
   <div>
     <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                < ul class="nav-item dropdown">
                
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Geeting Started
                </a>
                <li class="dropdown-menu">
            <a class="dropdown-item" href="#">Introduction</a>
            <li><a class="dropdown-item" href="#">Download</a></li>
            <li><a class="dropdown-item" href="#">Contents</a></li>
            <li><a class="dropdown-item" href="#">Browsers</a></li>
            <li><a class="dropdown-item" href="#">JavaScript</a></li>
            <li><a class="dropdown-item" href="#">WebPack</a></li>
            <li><a class="dropdown-item" href="#">Parcel</a></li>
            <li><a class="dropdown-item" href="#">Vite</a></li>
            <li><a class="dropdown-item" href="#">Accessibility</a></li>
            <li><a class="dropdown-item" href="#">RFS</a></li>
            <li><a class="dropdown-item" href="#">RTL</a></li>
            <li><a class="dropdown-item" href="#">Contribute</a></li>
                </li>
                </ul>
                <ul class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customize
          </a>
          <ul class="dropdown-menu">
            <a class="dropdown-item" href="#">Overview</a>
            <li><a class="dropdown-item" href="#">Sass</a></li>
            <li><a class="dropdown-item" href="#">Options</a></li>
            <li><a class="dropdown-item" href="#">Color</a></li>
            <li><a class="dropdown-item" href="#">Color Modes</a></li>
            <li><a class="dropdown-item" href="#">Components</a></li>
            <li><a class="dropdown-item" href="#">CSS Variable</a></li>
            <li><a class="dropdown-item" href="#">Optimize</a></li>
            <li><a class="dropdown-item" href="#">Optimize</a></li>
            
          </ul>
        </ul>
        <ul class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Layout

          </a>
          <ul class="dropdown-menu">
            <a class="dropdown-item" href="#">Breakpoints</a>
            <li><a class="dropdown-item" href="#">Containers</a></li>
            <li><a class="dropdown-item" href="#">Grid</a></li>
            <li><a class="dropdown-item" href="#">Columns</a></li>
            <li><a class="dropdown-item" href="#">Gutters</a></li>
            <li><a class="dropdown-item" href="#">Utilities</a></li>
            <li><a class="dropdown-item" href="#">Z-index</a></li>
            <li><a class="dropdown-item" href="#">CSS Grid</a></li>
            
          </ul>
        </ul>
        <ul>
        <a class="dropdown-item" href="#"><h5>Content</h5></a>
        
        <li><a class="dropdown-item" href="#">Reboot</a></li>
        <li><a class="dropdown-item" href="#">Typography</a></li>
        <li><a class="dropdown-item" href="#">Images</a></li>
        <li><a class="dropdown-item" href="#">Tables</a></li>
        <li><a class="dropdown-item" href="#">Figures</a></li>
        </ul>

        <ul>
        <a class="dropdown-item" href="#"><h5>Forms</h5></a>
        
        <li><a class="dropdown-item" href="#">Overview</a></li>
        <li><a class="dropdown-item" href="#">Form control</a></li>
        <li><a class="dropdown-item" href="#">Select</a></li>
        <li><a class="dropdown-item" href="#">Checks & radios</a></li>
        <li><a class="dropdown-item" href="#">Range</a></li>
        <li><a class="dropdown-item" href="#">Input group</a></li>
        <li><a class="dropdown-item" href="#">Floating labels</a></li>
        <li><a class="dropdown-item" href="#">Layout</a></li>
        <li><a class="dropdown-item" href="#">Validation</a></li>
        </ul>
        <ul>
        <a class="dropdown-item" href="#"><h5>Components</h5></a>
        
        <li><a class="dropdown-item" href="#">Accordion</a></li>
        <li><a class="dropdown-item" href="#">Alerts</a></li>
        <li><a class="dropdown-item" href="#">Badge</a></li>
        <li><a class="dropdown-item" href="#">Breadcrumb</a></li>
        <li><a class="dropdown-item" href="#">Buttons</a></li>
        <li><a class="dropdown-item" href="#">Button group</a></li>
        <li><a class="dropdown-item" href="#">Card</a></li>
        <li><a class="dropdown-item" href="#">Carousel</a></li>
        <li><a class="dropdown-item" href="#">Close button</a></li>
        <li><a class="dropdown-item" href="#">Collapse</a></li>
        <li><a class="dropdown-item" href="#">Dropdowns</a></li>
        <li><a class="dropdown-item" href="#">List group</a></li>
        <li><a class="dropdown-item" href="#">Modal</a></li>
        <li><a class="dropdown-item" href="#">Navbar</a></li>
        </ul>
        
        <ul>
        <a class="dropdown-item" href="#"><h5>Utilities</h5></a>
        
        <li><a class="dropdown-item" href="#">API</a></li>
        <li><a class="dropdown-item" href="#">Background</a></li>
        <li><a class="dropdown-item" href="#">Borders</a></li>
        <li><a class="dropdown-item" href="#">Colors</a></li>
        <li><a class="dropdown-item" href="#">Display</a></li>
        <li><a class="dropdown-item" href="#">Flex</a></li>
        <li><a class="dropdown-item" href="#">Float</a></li>
        <li><a class="dropdown-item" href="#">Interactions</a></li>
        
        </ul>
        

        <ul>
        <a class="dropdown-item" href="#"><h5>Extend</h5></a>
        
        <li><a class="dropdown-item" href="#">Approach</a></li>
        <li><a class="dropdown-item" href="#">Icons</a></li>
        
        
        </ul>

        <ul>
        <a class="dropdown-item" href="#"><h5>About</h5></a>
        
        <li><a class="dropdown-item" href="#">Overview</a></li>
        <li><a class="dropdown-item" href="#">Team</a></li>
        <li><a class="dropdown-item" href="#">Brand</a></li>
        <li><a class="dropdown-item" href="#">License</a></li>
        <li><a class="dropdown-item" href="#">Translations</a></li>
        <li><a class="dropdown-item" href="#">Migration</a></li>
        
        
        </ul>
        
        <ul>
        <a class="dropdown-item" href="#"><h5>Extend</h5></a>
        
        <li><a class="dropdown-item" href="#">Approach</a></li>
        <li><a class="dropdown-item" href="#">Icons</a></li>
        
        
        </ul>
        
        
        <ul>
        <a class="dropdown-item" href="#"><h5>About</h5></a>
        
        <li><a class="dropdown-item" href="#">Translations</a></li>
        <li><a class="dropdown-item" href="#">Icons</a></li>
        
        
        </ul>
                </div>
                <div className="col-md-10">
            
          {/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}
          {/* <nav class="navbar navbar-expand-lg bg-light"> */}
          <nav class="navbar navbar-expand-lg bg-custom">
          
          <div class="container-fluid">
    <a class="navbar-brand" href="#">Home Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Archive</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Category</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            pages
          </a>
          <ul class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Disabled</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
    
          </div>
          </nav>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" class="img-fluid" alt="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70">
    
          
          </img>
          <div className="overlay-card">
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <h5 className="card-subtitle mb-2 text-body-secondary">Card Subtitle</h5>
                <p className="card-text">Some quick example text to build on the card title
                With supporting text below as a natural lead-in to additional content
                </p>
                <a href="#" className="card-link">Card Link</a>
                {/* <a href="#" className="card-link">Another Link</a> */}
              </div>
            </div>
          </div>
          
          
          
            </div>
            <footer style={{ background: "#222", color: "#fff", padding: "40px 20px", marginTop: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "auto" }}>
          
          {/* About Section */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h3>About Us</h3>
            <p>We are a tech company providing</p> 
            <p>best solutions for </p>
            <p>web and mobile applications</p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h3>Contact Info</h3>
            <p>Email: contact@mywebsite.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Location: Bangalore, India</p>
          </div>

          {/* Social Media Links */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h3>Follow Us</h3>
            <li><a href="#" style={{ color: "#fff", marginRight: "10px" }}>Facebook</a></li>
            <li><a href="#" style={{ color: "#fff", marginRight: "10px" }}>Twitter</a></li>
            <li><a href="#" style={{ color: "#fff" }}>Instagram</a></li>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #555", paddingTop: "10px" }}>
          &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
        </div>
      </footer>
            
        </div>
        
   </div>
   
   
  );
}

export default App;




