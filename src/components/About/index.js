import React, { useEffect, useRef } from 'react';
import coverImage from '../../assets/cover/Kama.jpg';
import { Spring } from 'react-spring'

function About() {
  return (
    // Introduction
    <section className="my-5">
    <h1 class="section__title section__title--intro">
        Hi, I am <strong>Kamakanui Castaneda</strong>
    </h1>
    <p class="section__subtitle section__subtitle--intro">front-end dev</p>
      <img src={coverImage}  className="my-2 grayscale" style={{ width: "25%"}} alt="cover"/>
      <img src={coverImage}  className="my-2 purple" style={{ width: "25%" }} alt="cover"/>
      <img src={coverImage}  className="my-2 grayscale" style={{ width: "25%" }} alt="cover"/>
      <img src={coverImage}  className="my-2 purple" style={{ width: "25%" }} alt="cover"/>
      <div className="my-2">
        <p>
          <em>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
          </em>
          </p>
          {/* <button onClick={this.props.toggle}>

          </button> */}
      </div>
    </section>
  );
}

export default About;
