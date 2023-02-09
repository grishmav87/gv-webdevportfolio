import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project1 from "../assets/Project1.PNG";
import Project2 from "../assets/Project2.PNG";
import Project3 from "../assets/Project3.PNG";
import Project4 from "../assets/Project4.PNG";

export default function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="projects pt-2 pb-2">
      <Container>
        <h2>Projects</h2>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          dotListClass="custom-dot-list-style"
        >
          <div className="project-card">
            <Row>
              <Col>
                {" "}
                <img src={Project1} alt="project-1"></img>
              </Col>
              <Col className="project-info ">
                <h5>Weather app</h5>
                <p>
                  Built using React, the app returns local weather information
                  and location for the input city
                </p>
              </Col>
            </Row>
            <div className="project-btns d-flex">
              <Button>
                <a href="/">View project</a>
              </Button>
              <Button>
                <a href="/">View code</a>
              </Button>
            </div>
          </div>
          <div className="project-card">
            <Row>
              <Col>
                {" "}
                <img src={Project2} alt="project-2"></img>
              </Col>
              <Col className="project-info">
                <h5>Dictionary app</h5>
                <p>
                  Built using React, the app returns dictionary and image
                  results for the input word
                </p>
              </Col>
            </Row>{" "}
            <div className="project-btns d-flex">
              <Button>
                <a href="/">View project</a>
              </Button>
              <Button>
                <a href="/">View code</a>
              </Button>
            </div>
          </div>
          <div className="project-card">
            <Row>
              <Col>
                {" "}
                <img src={Project3} alt="project-3"></img>
              </Col>
              <Col className="project-info">
                <h5>World clock</h5>
                <p>
                  Built using Moment.js, the app returns current times for
                  selected cities.
                </p>
              </Col>
            </Row>{" "}
            <div className="project-btns d-flex">
              <Button>
                <a href="/">View project</a>
              </Button>
              <Button>
                <a href="/">View code</a>
              </Button>
            </div>
          </div>
          <div className="project-card">
            <Row>
              <Col>
                {" "}
                <img src={Project4} alt="project-4"></img>
              </Col>
              <Col className="project-info">
                <h5>Landing page</h5>
                <p>
                  Responsive landing page built using CSS grids with embedded
                  music and videos.
                </p>
              </Col>
            </Row>
            <div className="project-btns d-flex">
              <Button>
                <a href="/">View project</a>
              </Button>
              <Button>
                <a href="/">View code</a>
              </Button>
            </div>
          </div>
        </Carousel>
      </Container>
    </section>
  );
}