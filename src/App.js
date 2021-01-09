import React,{Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      query:'',
    }
  }

  changeHandeler =  (e)=>{
    console.log(e.target.value);
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({[nam]:val});
  }

  submitHandeler =(e) =>{
    e.preventDefault();
    alert('Thank You for Contacting Us, We will get back to you within 24hrs. ')

  }

  render(){
    return(
      <div className='main' id='mainDiv'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar navbar-inverse fixed-top sticky" role='navigation'>
            <a class="navbar-brand" href="#">XYZ</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#products">Our Products <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#customers">Customers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
        </nav>
        <div className='site-display'>

          <h1 style={{fontSize:'200px'}}>XYZ</h1>
          <p style={{fontSize:'70px'}}>-tagline</p>
        </div>
        <div id='products'>
         <h2>Our New and Exciting Products</h2>
         <div className='row'>
         <div className="card col-sm" style={{width: '18rem'}}>
              <img class="card-img-top" src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FAudi-Q2-241020191004.jpg&h=300&w=450&q=100" alt="Card image cap"/>
              <div class="card-body">
               <h5 class="card-title">Car title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Click to know more</a>
              </div>
        </div>
        <div className="card col-sm" style={{width: '18rem'}}>
            <img class="card-img-top" src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Car title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Click to know more</a>
            </div>
        </div>
        <div className="card col-sm" style={{width: '18rem'}}>
            <img class="card-img-top" src="https://etimg.etb2bimg.com/photo/72306162.cms" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Car title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Click to know more</a>
            </div>
         </div>
         </div>
         <div className='row'>
         <div className="card col-sm" style={{width: '18rem'}}>
              <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/2/25/2018_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282018-11-02%29_01.jpg" alt="Card image cap"/>
              <div class="card-body">
               <h5 class="card-title">Car title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Click to know more</a>
              </div>
        </div>
        <div className="card col-sm" style={{width: '18rem'}}>
            <img class="card-img-top" src="https://imgd.aeplcdn.com/0x0/cw/ec/39045/Audi-Q4-Etron-concept-Exterior-170100.jpg?wm=0" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Car title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Click to know more</a>
            </div>
        </div>
        <div className="card col-sm" style={{width: '18rem'}}>
            <img class="card-img-top" src="https://www.godigit.com/content/dam/godigit/directportal/en/mahindra-tuv300-1.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Car title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Click to know more</a>
            </div>
         </div>
         </div>







      </div>

     <div id='about'>
     <h2 style={{marginLeft:'15px'}}>About Us</h2>
      <div className="media">
          <img class="mr-2 col-8" src="https://static.turbosquid.com/Preview/001246/141/BN/car-showroom-build-3D-model_D.jpg" alt="Generic placeholder image"/>
          <div class="media-body">
            <h5 class="mt-1 col-4">XYZ oganization</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
      </div>
      </div>


        <div id='customers'>

          <h2 style={{marginLeft:'15px'}}>Our Customer Services</h2>
          <div className="media">
              <img class="mr-2 col-8" src="https://bookboon.com/blog/wp-content/uploads/sites/5/2017/11/Customer-Care.jpg" alt="Generic placeholder image"/>
              <div class="media-body">
                <h5 class="mt-1 col-4">XYZ oganization</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
          </div>

        </div>


        <div id='contact' className='jumbotron'>
          <h2>Contact Us :</h2>
          <p>For any query or information please contact us at :</p>
          <h2><i className="fas fa-envelope"></i> xyz@gmail.com</h2>
          <h2><i class="fas fa-phone-square-alt"></i>+91000000000</h2>
          <br/>
          <br/>
          <h4>Write your queries here,</h4>
          <div class='row'>

          <form>
          <div className='col-md-6'>
          <label for='firstName'>First Name </label>
          <input type="text" name='firstName' style={{width:'100vh'}} onChange={this.changeHandeler} />
          <br/>
          <label for='lastName'>Last Name </label>
          <input type="text" name='lastName' style={{width:'100vh'}} onChange={this.changeHandeler} />
          <br/>
          <label for='email'>Email Id</label>
          <input type="email" name='email' style={{width:'100vh'}} onChange={this.changeHandeler} />
          <br/>
          <label for='phone'>Phone Number</label>
          <input type="number" name='phone' style={{width:'100vh'}} onChange={this.changeHandeler} />
          </div>
          <br/>
          <div className='col-12'>

          <textarea type='text' name='query' placeholder='Write your query' style={{width:'100vh'}}onChange={this.changeHandeler} />
          </div>
          <br/>
          <div className='col-12'>

          <button type='submit' className="btn btn-success"   onClick={this.submitHandeler}>Submit</button>
          </div>





          </form>
            </div>
        </div>
        <br/>
       <footer>

            <a href="#mainDiv"><button type="button" className="btn btn-secondary btn-lg btn-block" >Back to top</button></a>
            <div className='iconDiv'>
            <button className="btn btn-outline-success btn-sm icon">twitter<SocialIcon url="http://twitter.com" /></button>
            <button className="btn btn-outline-primary btn-sm icon">Linkedin<SocialIcon url="http://linkedin.com" /></button>
            <button className="btn btn-outline-danger btn-sm icon">Gmail<SocialIcon url="http://gmail.com" /></button>
            <button className="btn btn-outline-warning btn-sm icon">Instagram<SocialIcon url="http://instagram.com" /></button>
            </div>
           <p className="copyright">© XYZ Group </p>
     </footer>



      </div>
    )
  }
}


export default App;
