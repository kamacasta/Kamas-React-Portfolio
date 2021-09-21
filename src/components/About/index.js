import React from 'react';
import coverImage from '../../assets/cover/Kama.jpg';
function About() {
  return (
    // Introduction
    <section className="my-5">
      <h1 id="about"><em>Hi, I am</em><strong> Kamakanui Castaneda</strong></h1>
      <p className="subtitle subtitleIntro">Front-End Developer</p>
      <img src={coverImage} className="my-2" style={{ width: "35%" }} alt="cover"/>
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
      </div>
    </section>
  );
}

export default About;
