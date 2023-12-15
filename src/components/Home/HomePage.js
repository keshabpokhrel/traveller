import React, { Component } from "react";
import "../../Styles/Stylehome.css";
import Header from "../Header";
import Footer from "../Footer";
/* 
const data = [
  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Sri Lanka",
  },

  {
    src: 'https://www.hl.co.uk/__data/assets/image/0011/15985712/varieties/940.jpg',
    caption: "Unawatuna Beach",
  },

  {
    src: 'https://www.livemint.com/lm-img/img/2023/04/21/600x338/Air_travel_1682103021468_1682103021608.jpg',
    caption: "Dabulla Temple",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Nine Arch Bridge",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Yala National Park",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Jungle Beach",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Sigiriya",
  },
];
function Dots(props) {
  const dots = data.map((data, index) => {
    return (
      <span
        key={index}
        className={index === props.slideIndex ? "dot activedot" : "dot"}
      ></span>
    );
  });

  return <div className="dot-container">{dots}</div>;
}

function Slider(props) {
  const slide = data.map((d, index) => {
    return (
      <div
        key={index}
        className={
          index === props.slideIndex ? "myslides fade" : "myslidesnone"
        }
      >
        <img className="imgxx" src={d.src} alt={d.caption} />

        <div className="textxx">{d.caption}</div>
      </div>
    );
  });

  return slide;
}
 */
export default class HomePage extends Component {
 /*  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      arrow: "right",
    };
  }
  prevSlide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? data.length - 1
          : this.state.slideIndex - 1,
      arrow: "left",
    });
  }

  nextSlide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === data.length - 1
          ? 0
          : this.state.slideIndex + 1,
      arrow: "right",
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.autoPlay(), 3000);
  }
  autoPlay() {
    if (this.state.arrow === "left") {
      this.setState({
        slideIndex:
          this.state.slideIndex === 0
            ? data.length - 1
            : this.state.slideIndex - 1,
      });
    } else {
      this.setState({
        slideIndex:
          this.state.slideIndex === data.length - 1
            ? 0
            : this.state.slideIndex + 1,
      });
    }
  }
 */
  render() {
    return (
      <div>
        <Header />

        <div class="info">
          <div className="container-fluid " id="bodyhome">
            {/* <div className="App">
              <div className="containerhome container">
                <br />
                <div className="slideshow-containerxx">
                  <Slider slideIndex={this.state.slideIndex} />
                  <span className="prev" onClick={() => this.prevSlide()}>
                    &#10094;
                  </span>
                  <span className="next" onClick={() => this.nextSlide()}>
                    &#10095;
                  </span>
                </div>

                <Dots slideIndex={this.state.slideIndex} />
              </div>
            </div> */}
            <br />
            <p className="parga">
              {" "}
              
              The benefits you can gain from using Adventure web app, to
              start with, your agent will help you choose the right places to
              go. Traveling is a very crucial part of life as it is the best way to
              get out of the busy schedule. It is also to experience life in
              different ways. Traveling is actually a good remedy for stress,
              anxiety and depression. It also improves the mental and physical
              health.
            </p>

            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
