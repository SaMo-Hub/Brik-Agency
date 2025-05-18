import React from "react";

export const AboutUs = () => {
  return (
    <section >
      <div>
        <div>
            <h3 className='subbtitle'>What we do</h3>
            <h2 className='title'>About us</h2>
        </div>
      </div>
      <div className="squareCenter">

      <div className="squareInformation">
        {/* <img src="" alt="" /> */}
        <div>
          <p className="squareTexte">
            Our work speaks for itself, earning recognition from Awwwards,
            Creative Circle, Communication Arts, and the Webby Awards among
            others. But more importantly, it delivers results for our clients,
            turning visitors into customers and customers into brand advocates.
          </p>
          <div className="">
            <div className="contactTitleParapgrahe">
              <h5>Contact us</h5>
              <p>
                Tell us about your project. <br />Let’s collaborate and make great
                stuff.
              </p>
            </div>
            <div className="contactList">

              <div className="serviceButtonIconTexte">
                <div className="icon">
                  <img src="" alt="" />
                </div>
                <p>Write Us</p>
              </div>
              <div className="serviceButtonIconTexte">
                <div className="icon">
                  <img src="" alt="" />
                </div>
                <p>+33 7 67 85 32 02</p>
              </div>

            </div>
          </div>
        </div>
              </div>

      </div>
    </section>
  );
};
