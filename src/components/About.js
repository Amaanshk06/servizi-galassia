function About  ()  

{
  return (
    <div className="about">
        <div className="containerA">
        <img
            src="https://storage.googleapis.com/a1aa/image/dc1de2cb-e095-40c1-1830-e58b518a4d18.jpg"
            alt="Office corridor with glass walls on both sides and a man walking in the distance"
            className="image"
            width="500"
            height="700"/>
        <div className="content">
            <h1>ABOUT US</h1>
            <p className="aboutp">
            At <strong>A&amp;T Services Inc.</strong>, we take pride in providing
            high-quality refurbished computers and laptops at unbeatable prices. With years
            of experience in the Indian IT industry, we’ve built a strong reputation for
            offering reliable hardware solutions, backed by prompt, expert support. Our
            clients trust us not only for our exceptional products but also for our
            outstanding customer service, often referring us to others for their hardware
            needs.
            </p>
            <button className="about-btn" type="button">READ MORE</button>
        </div>
        </div>
    </div>
  );
};

export default About;