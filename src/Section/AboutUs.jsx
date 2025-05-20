import React from "react";

export const AboutUs = () => {
  return (
    <section className="mb-[150px]">
      <div>
        <div>
          <h3 className="relative top-[15px] left-[5px] font-supply text-[16px]">What we do</h3>
          <h2 className="font-['Grotesk'] uppercase text-[138px] mb-[120px]">About us</h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-[700px] p-12 rounded border border-[#E72E00]">
         
         <div className="w-full items-center flex justify-center mb-[80px]">
           <img className="w-2/6" src="../../logo.svg" alt="" />
          </div>
          <p className="mb-[60px]">
            Our work speaks for itself, earning recognition from Awwwards, Creative Circle,
            Communication Arts, and the Webby Awards among others. But more importantly, it delivers
            results for our clients, turning visitors into customers and customers into brand advocates.
          </p>
          <div>
            <div className="flex flex-col gap-3 mb-[30px]">
              <h5 className="text-[16px] font-['Supply_Mono']">Contact us</h5>
              <p>Tell us about your project. <br />Let’s collaborate and make great stuff.</p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-3 font-['Supply_Mono']">
                <div className="w-[27px] h-[27px] bg-[#E72E00] rounded"></div>
                <p>Write Us</p>
              </div>
              <div className="flex items-center gap-3 font-['Supply_Mono']">
                <div className="w-[27px] h-[27px] bg-[#E72E00] rounded"></div>
                <p>+33 7 67 85 32 02</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
