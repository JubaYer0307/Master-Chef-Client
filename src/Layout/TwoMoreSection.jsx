import React from 'react';
import { Carousel, Container } from 'react-bootstrap'; 




const TwoMoreSection = () => {
    
    
      return ( 
        <div> 
            <Container>
            <section className="cuisine-photo-slider">
          <h2 style={{textTransform: "uppercase"}}>Our Delicious Dishes</h2>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg"
          alt="First slide" 
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.southernliving.com/thmb/rQaGDkAPGa_MeU4eglrAaeuexjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-chicken-parmesan-ddmfs-0047-fe218cb392784e79bfb4bb586685d6f9.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src="https://www.foodandwine.com/thmb/G7XU-Pof_sZNaACMudFwDG6NSCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpeas-and-kale-in-spicy-pomodoro-sauce-FT-RECIPE0918-4e576ac561c94803924e381aeb22cb23.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel >
          
        </section>
        </Container>
        <Container><div className="chef-info">
        
        <div>
          <h3>Follow Us On</h3>
       
          <div
  className="social-media-links"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    textAlign: "center",
    marginBottom: "20px",
  }}
>
  <li>
    <a
      style={{ textDecoration: "none" }}
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
    >
      Instagram
    </a>
  </li>
  <li>
    <a
      style={{ textDecoration: "none" }}
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
    >
      Facebook
    </a>
  </li>
  <li>
    <a
      style={{ textDecoration: "none" }}
      href="https://www.youtube.com/"
      target="_blank"
      rel="noreferrer"
    >
      Youtube
    </a>
  </li>
</div>



        </div>
      </div></Container>
        </div>
      );
    };

export default TwoMoreSection;