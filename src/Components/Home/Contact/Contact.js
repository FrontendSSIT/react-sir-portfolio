import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ContactImg from '../../../images/g1.jpg'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <Container className="contact-form">
        <Row>
        <Col lg={6} xs={12}>
         <div className="mt-5">
         <img src={ContactImg} alt="" width="100%" />
         </div>
        </Col>
        <Col lg={6} xs={12}>
         <div className="form-section">
         <form onSubmit={handleSubmit(onSubmit)}>
         <h2>FREE CONSULTATION</h2>
         <p>  Lorem ipsum dolor sit amet,Phasellus dapibus felis elit, sed accumsan arcu gravida vitae.</p>
     <div> <input type="text" placeholder="Name" name="First name" ref={register({required: true, maxLength: 80})} /></div>
     <div> <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /></div>
     <div> <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} /></div>
     <div> <textarea placeholder="Write your message"></textarea></div>
     <input type="submit"  style={{background:'#45668E',color:'#fff',border:'none',padding:'5px 10px',}} value="Send Your Message"/>
     </form>
         </div>
        </Col>
      
        </Row>
        </Container>
    )
}


export const MainContacts = () => {
    return(
        <section className="mb-2">
          <main id="main" style={{ backgroundColor: "aliceblue" }}>
             <div class="breadcrumbs" data-aos="fade-in">
              <div class="container">
                <h2>Contact Us</h2>
              </div>
            </div>
            <section id="contact" class="contact">
              <div data-aos="fade-up">
                <iframe style={{ border: "0", width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.2639436571578!2d90.36158663934343!3d23.789609539672792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17f1e5095c9%3A0x2486088ecd2510d8!2sSS%20IT%20House!5e0!3m2!1sen!2sbd!4v1605426528434!5m2!1sen!2sbd" frameborder="0" allowfullscreen title="video"></iframe>
              </div>
  
              <div class="container" data-aos="fade-up">
  
                <div class="row mt-5">
  
                  <div class="col-lg-4">
                    <div class="info">
                      <div class="address">
                        <i class="icofont-google-map"></i>
                        {/* <h4>Location:</h4> */}
                        <p> <fa/> 123/2 Middle Paikpara, Mirpur-1, Dhaka - 1216</p>
                      </div>
  
                      <div class="email">
                       
                        {/* <h4>Email:</h4> */}
                        <p> <FontAwesomeIcon icon={faEnvelope} /> example@gmail.com</p>
                      </div>
  
                      <div class="phone">
                        
                        {/* <h4>Call:</h4> */}
                        <p> <FontAwesomeIcon icon={faMobile} sellinbd/>+88</p>
                      </div>
  
                    </div>
  
                  </div>
  
                  <div class="col-lg-8 mt-5 mt-lg-0 form-container">
                    <form >
                      <div class="form-row">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                          <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                          <div class="validate"></div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div class="validate"></div>
                      </div>
                      <div class="form-group">
                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div class="validate"></div>
                      </div>
                      <div class="mb-3">
                        <div class="error-message"></div>
                      </div>
                      <div class="text-center"><button type="submit" style={{background:'#45668E',color:'#fff',border:'none',padding:'5px 10px',}}>Send Message</button></div>
                    </form>
  
                  </div>
  
                </div>
  
              </div>
            </section>
  
          </main>
          </section>
    )
}