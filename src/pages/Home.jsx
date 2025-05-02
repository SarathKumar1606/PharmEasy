import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import Slider from "react-slick";
import cetirizine from "../assets/cetirizine.jpeg";
import eno from "../assets/eno.jpeg";
import ironRedSyrup from "../assets/Iron Red Syrup.jpeg";
import metformin from "../assets/metformin.jpeg";
import omeprazole from "../assets/Omeprazole.jpeg";
import paracetamol from "../assets/paracetamol.jpeg";
import ibuprofen from "../assets/ibuprofen.jpeg";
import vitamin from "../assets/vitamin c.jpeg";
import customer1 from "../assets/alice.jpeg";
import customer2 from "../assets/david.jpeg";
import customer3 from "../assets/john.jpeg";
import {
  FaCapsules,
  FaFlask,
  FaUserMd,
  FaHeartbeat,
  FaBlog,
  FaTags,
  FaStore,
  FaGift,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaLock,
} from "react-icons/fa";
import medicineVideo from "./videos/video.mp4";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/medicines");
  };

  const cardItems = [
    { icon: <FaCapsules size={40} />, title: "Medicine", subtitle: "SAVE 24% OFF" },
    { icon: <FaFlask size={40} />, title: "Lab Tests", subtitle: "UPTO 70% OFF" },
    { icon: <FaUserMd size={40} />, title: "Doctor Consult", subtitle: "" },
    { icon: <FaHeartbeat size={40} />, title: "Healthcare", subtitle: "UPTO 60% OFF" },
    { icon: <FaBlog size={40} />, title: "Health Blogs", subtitle: "" },
    { icon: <FaGift size={40} />, title: "PLUS", subtitle: "Save 5% Extra" },
    { icon: <FaTags size={40} />, title: "Offers", subtitle: "" },
    { icon: <FaStore size={40} />, title: "Value Store", subtitle: "UPTO 50% OFF" },
  ];

  const popularProducts = [
    { id: 1, name: "Paracetamol", price: "$2", image: paracetamol },
    { id: 2, name: "Ibuprofen", price: "$3", image: ibuprofen },
    { id: 3, name: "Cetirizine", price: "$1.5", image: cetirizine },
    { id: 4, name: "Iron Red Syrup", price: "$5", image: ironRedSyrup },
    { id: 5, name: "Vitamin C", price: "$1", image: vitamin },
    { id: 6, name: "ENO Powder", price: "$2.5", image: eno },
    { id: 7, name: "Metformin", price: "$4", image: metformin },
    { id: 8, name: "Omeprazole", price: "$3.5", image: omeprazole },
  ];

  const testimonials = [
    {
      name: "John Doe",
      age: 32,
      location: "New York, USA",
      review: "Great service and fast delivery!",
      image: customer1,
    },
    {
      name: "Jane Smith",
      age: 28,
      location: "London, UK",
      review: "Affordable prices and genuine medicines.",
      image: customer2,
    },
    {
      name: "Alice Brown",
      age: 35,
      location: "Sydney, Australia",
      review: "Highly recommend PharmaCare for online shopping.",
      image: customer3,
    },
  ];

  const handleUploadPrescription = () => {
    alert("Prescription uploaded successfully!");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-wrapper">
     
      <section>
        <div className="video-container">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src={medicineVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-caption">
            <h1>Welcome to PharmaCare</h1>
            <p>Your anytime medicine companion. Get your medicines delivered at your doorstep seamlessly.</p>
            <Button variant="primary" size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <hr />

   
      <section>
        <h2 className="section-title">Our Services</h2>
        <Container className="card-section my-5">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {cardItems.map((item, index) => (
              <Col key={index} className="animated-card">
                <Card className="custom-card h-100 text-center shadow-sm border-0">
                  <Card.Body>
                    <div className="icon-wrapper mb-3">{item.icon}</div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.subtitle}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <hr />

      
      <section>
        <div className="medicines-carousel my-5">
          <h2 className="section-title">Popular Medicines</h2>
          <Slider {...sliderSettings}>
            {popularProducts.map((medicine) => (
              <div key={medicine.id} className="medicine-card">
                <img src={medicine.image} alt={medicine.name} className="medicine-image" />
                <h5 className="medicine-name">{medicine.name}</h5>
                <p className="medicine-price">{medicine.price}</p>
                <button className="btn btn-warning">Add to Cart</button>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <hr />

     
      <section>
        <Container className="upload-prescription my-5 text-center">
          <h2 className="section-title">Upload Your Prescription</h2>
          <p>Upload your prescription and get your medicines delivered to your doorstep.</p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" onClick={handleUploadPrescription}>
              Upload Prescription
            </Button>
          </Form>
        </Container>
      </section>
      <hr />

   
      <section>
        <Container className="why-choose-us my-5">
          <h2 className="section-title">Why Choose Us?</h2>
          <Row xs={1} sm={2} md={4} className="g-4 text-center">
            <Col>
              <FaTruck size={50} />
              <h5>24/7 Delivery</h5>
            </Col>
            <Col>
              <FaShieldAlt size={50} />
              <h5>Licensed Pharmacists</h5>
            </Col>
            <Col>
              <FaLock size={50} />
              <h5>Secure Payments</h5>
            </Col>
            <Col>
              <FaHeadset size={50} />
              <h5>Fast Support</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />

      <section>
        <Container className="testimonials my-5">
          <h2 className="section-title">What Our Customers Say</h2>
          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col key={index} xs={12} md={4} className="animated-card">
                <Card className="testimonial-card h-100 text-center">
                  <Card.Body>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <p className="testimonial-age-location">
                      {testimonial.age} years old, {testimonial.location}
                    </p>
                    <Card.Text>"{testimonial.review}"</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;