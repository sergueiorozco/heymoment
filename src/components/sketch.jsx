import React, { Component } from 'react';

class Sketch extends React.Component {
  render() {
    return <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        

        <div className="carousel-inner" id="carouselContainer">
          <div className="item active">
          <div id="isaIntro">
              <span className="rotate-animation-45">H</span>
              <span className="falling-animation-3s">E</span>
              <span className="swap-animation-3s">Y</span>
              <span>, &nbsp;</span>
              <span className="jump-animation-5s"> I</span>
              <span>&nbsp; </span>
              <span className="rotate-animation-20"> A</span>
              <span> M</span>
              <span> &nbsp;</span>
              <span className="jump-animation-3s"> I</span>
              <span className="falling-animation-5s"> S</span>
              <span className="swap-animation-5s"> A</span>
          </div>
            <p id="isaIntroText">HERE I WILL WRITE SOMETHING I LIKE AND BLAH BLAH.</p>
        </div>
          <div className="item" id="isaHobbies">
            <h1 > WORK? </h1>
          </div>

          <div className="item" id="isaWork">
            <h1 > HOBBY? </h1>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

      </div>

    </div>;
  }
}

export default Sketch;