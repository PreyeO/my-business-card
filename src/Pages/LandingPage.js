
 import Photo from '../Assets/photo.PNG';
 import { AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';
 import About from './About';
 import Footer from './Footer';

 
 const LandingPage = () => {


   return (
     <div className='main-container'>

      <div className='mini-container'>
       <img src={Photo} alt='profile' />
       <h2>Ayibakepreye Omusuku</h2>
       <h4>Frontend Developer</h4>
      
       <div className='contact'>
        <button><a href ='omusukup@yahoo.com' target="_blank" rel="noreferrer"><AiOutlineMail style={{height:15, width:15}}/></a>  Email</button>
        <span><a href ='https:www.linkedin.com/in/ayibakepreye-omusuku-234554172' target='_blank' rel="noreferrer"><button><AiOutlineLinkedin style={{height:15, width:15}}/>  LinkedIn</button></a></span>
       </div>
       <About />
       <Footer />
       </div>
      
     
     </div>
   )
 }
 
 export default LandingPage
 