import Draw_tablet from './video/Draw_tablet.mp4'
import { faEnvelope,  faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen() {
const VideoSrc = Draw_tablet

return (
    <div className="thehead">

    {/* <div className="header">
        <div className="header-content">
            <div className="container">
                    <div className="middlediv">
                        <h1 className="kliffsstorelarge ">Kliff's Store</h1>

                        <Link to="/shop" className="bn60 ">Shop Now</Link>
                    </div>  
            </div> 
            
        </div>        
        <video 
        autoPlay 
        loop
        muted
        id="video-background" 
        poster="/img/draw_tablet.PNG" 
        playsinline
        >
            <source src={VideoSrc} type="video/mp4" />
        </video>
    </div> 



    <div className="ContactBackground">
    <div id="contact" className="form-1">
            <div className="contactbox">
                    <h2 className="contactH-heading">Contact details</h2>
                    <p className="contactP-heading">Fill out information bellow to Contact Us</p>
                    <ul className="list-unstyled li-space-lg">
                        <li> <FontAwesomeIcon icon= {faMapMarkerAlt}></FontAwesomeIcon> West Palm Beach FL, US</li>
                        <li> <FontAwesomeIcon icon= {faPhone}></FontAwesomeIcon> <a href="tel:00817202212">+1 777-777-7777</a></li>
                        <li> <FontAwesomeIcon icon= {faEnvelope}></FontAwesomeIcon> <a href="mailto:contact@site.com">kliffsStore@gmail.com</a></li>
                    </ul>
            </div> 
            <div className="roww">
                <div>
                    
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control-input " placeholder="Name" required></input>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" placeholder="Email" required></input>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" placeholder="Message" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>

                </div> 
            </div> 
        </div> 
    </div> 
     */}
    <div>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
            Monitors have enhanced features and specifications to give you a fantastic experience
            </h1>
            <p class="hero-description">
            It is used to display images, text, video, and graphics information generated by a connected computer via a computer's video card.
            </p>

                        <Link to="/shop" className="btn btn--full margin-right-sm ">Shop Now</Link>

            {/* <a href="#how" class="btn btn--outline">Learn more &darr;</a> */}
            <div class="delivered-meals">
              <div class="delivered-imgs">
                <img src="image2/customers/customer-1.jpg" alt="Customer photo" />
                <img src="image2/customers/customer-2.jpg" alt="Customer photo" />
                <img src="image2/customers/customer-3.jpg" alt="Customer photo" />
                <img src="image2/customers/customer-4.jpg" alt="Customer photo" />
                <img src="image2/customers/customer-5.jpg" alt="Customer photo" />
                <img src="image2/customers/customer-6.jpg" alt="Customer photo" />
              </div>
              <p class="delivered-text">
                <span>50,000+</span> Monitors delivered last year!
              </p>
            </div>
          </div>
          <div class="hero-img-box">
              <img
                src="image2/Monitor.webp"
                class="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
          </div>
        </div>
      </section>




      <section class="section-meals" id="meals">
        <div class="container center-text">
          <span class="subheading">Trending Buy</span>
          <h2 class="heading-secondary">
          Most Popular Choices           </h2>
        </div>

        <div class="container grid grid--3-cols margin-bottom-md">
          <div class="meal">
            <img
              src="image2/monitor/Cooler_Master.png"
              class="meal-img"
              alt="Japanese Gyozas"
            />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegetarian">Budget Option</span>
              </div>
              <p class="meal-title">Cooler Master PC</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span><strong>Refresh Rate: </strong> 144 Hz</span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span><strong>Screen Size: </strong>  34 Inches </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span><strong>4.9</strong> rating (537)</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="meal">
            <img
              src="image2/monitor/LG.jpg"
              class="meal-img"
              alt="Japanese Gyozas"
            />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegetarian">Top Quality Option</span>
              </div>
              <p class="meal-title">LG 38WN95C-W</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span><strong>Refresh Rate: </strong> 144 Hz</span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span><strong>Screen Size: </strong>  38 Inches </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span><strong>4.9</strong> rating (537)</span>
                </li>
              </ul>
            </div>
            </div>

            <div class="meal">
            <img
              src="image2/monitor/ASUS.jpg"
              class="meal-img"
              alt="Japanese Gyozas"
            />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegetarian">Under 200 Option</span>
              </div>
              <p class="meal-title">ASUS VG246H</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span><strong>Refresh Rate: </strong> 165 Hz</span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span><strong>Screen Size: </strong>  23.8 Inches </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span><strong>4.9</strong> rating (537)</span>
                </li>
              </ul>
            </div>
            </div>
            </div>
        <div class="container all-recipes">
          <a href="#" class="link">See all recipes &rarr;</a>
        </div>
      </section>

      <section class="section-testimonials" id="testimonials">
        <div class="testimonials-container">
          <span class="subheading">Testimonials</span>
          <h2 class="heading-secondary">Once you try it, you can't go back</h2>

          <div class="testimonials">
            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Amanda Bryson"
                src="image2/customers/Amanda.jpg"
              />
              <blockquote class="testimonial-text">
              Good insight and easy to use - I particularly like 
              the live notifications when a new device is added to my network.
              </blockquote>
              <p class="testimonial-name">&mdash; Amanda Bryson</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Caleb Hadley"
                src="image2/customers/Caleb.jpg"
              />
              <blockquote class="testimonial-text">
              Packaging perfect, delivered on time. This is easy to set up and use, great controls over brightness and contrast.
I would buy again.
              </blockquote>
              <p class="testimonial-name">&mdash; Caleb Hadley</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Trevon Miller"
                src="image2/customers/Trevon.jpg"
              />
              <blockquote class="testimonial-text">
              Use it for work, very nice quality and LOVE the ability 
              to move it up/down and tilt which has been super helpful with my classes and meetings online.

              </blockquote>
              <p class="testimonial-name">&mdash; Trevon Miller</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Katie Smith"
                src="image2/customers/Katie.jpg"
              />
              <blockquote class="testimonial-text">
              Love this monitor, just needed something for school with everything being online and this fits all
               my needs. Easy to set up and the screen is bright. 
              </blockquote>
              <p class="testimonial-name">&mdash; Katie Smith</p>
            </figure>
          </div>
        </div>

        <div class="gallery">
          <figure class="gallery-item">
            <img
              src="image2/gallery/p2.webp"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p13.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p17.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p4.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p16.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p6.webp"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p7.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p8.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p15.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p10.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p11.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src="image2/gallery/p12.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        </div>
      </section>

      <section class="section-pricing" id="pricing">
        <div class="container">
          <span class="subheading">Pricing</span>
          <h2 class="heading-secondary">
            Great Qualities to enjoy from
          </h2>
        </div>

        <div class="container grid grid--4-cols">
          <div class="feature">
          <FontAwesomeIcon className="feature-icon" icon={faImages}></FontAwesomeIcon>
            <p class="feature-title">Impressive Picture Quality</p>
            <p class="feature-text">
            Features an IPS panel for premium picture quality, with vibrant color reproduction and crystal-clear 
            images and text without color shift.
            </p>
          </div>
          <div class="feature">
            <FontAwesomeIcon className="feature-icon" icon={faLightbulb}></FontAwesomeIcon>
            <p class="feature-title">Ultra-Low Blue Light Technology</p>
            <p class="feature-text">
            Eye Saver Mode lowers blue light levels, to help reduce eye 
            strain during long work hours.
            </p>
          </div>
          <div class="feature">
          <FontAwesomeIcon className="feature-icon" icon={faAdjust}></FontAwesomeIcon>
            <p class="feature-title">Ergonomic and Adjustable</p>
            <p class="feature-text">
            The monitor swivels, tilts, pivots and is height-adjustable, for comfort over a 
            long workday.
            </p>
          </div>
          <div class="feature">
          <FontAwesomeIcon className="feature-icon" icon={faPlug}></FontAwesomeIcon>
            <p class="feature-title">Connectivity</p>
            <p class="feature-text">
             Versatile connectivity options with HDMI, DisplayPort, and USB-C.
            </p>
          </div>
        </div>
      </section>

      <section class="section-cta" id="cta">
        <div class="container">
          <div class="cta">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Contact Us</h2>
              <p class="cta-text">
              
              </p>

              <form class="cta-form" name="sign-up" netlify>
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>

                <div class="form-control">
          <label for="description">Message</label>
          <textarea
                    id="description"
                    type="text"
                    placeholder="Type Message here"
                    name="description"
                    required
                  />
                </div>

                <button class="btn btn--form">Sign up now</button>


              </form>
            </div>
            <div
              class="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </div>

    </div>
)
}