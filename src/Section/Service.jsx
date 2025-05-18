import React from "react";

export const Service = () => {
  const serviceList = [
    {
      icon: '',
      title: "Websites for the most ambitious brands",
      paragraphe: 'Lorem ipsum dolor sit amet consectetur. Odio ut sed vitae vitae tellus laoreet sed...'
    },
    {
      icon: '',
      title: "Websites for the most ambitious brands",
      paragraphe: 'Lorem ipsum dolor sit amet consectetur. Odio ut sed vitae vitae tellus laoreet sed...'
    },
  ];

  return (
    <section className="mb-[150px]">
      <div>
        <h3 className="relative top-[15px] left-[5px] font-['Supply_Mono'] text-[16px]">What we do</h3>
        <h2 className="font-['Grotesk'] uppercase text-[138px] mb-[120px]">Service</h2>
      </div>
      <div className="w-[60%] ml-[40%]">
        <p className="mb-12">
          Our work speaks for itself, earning recognition from Awwwards,
          Creative Circle, Communication Arts, and the Webby Awards among
          others.
        </p>
        <div className="flex flex-col gap-3">
          {serviceList.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 p-4 rounded border border-[#E72E00]">
              <div className="flex items-center gap-3 font-['Supply_Mono']">
                <div className="w-[27px] h-[27px] bg-[#E72E00] rounded"></div>
                <p>{item.title}</p>
              </div>
              <p>{item.paragraphe}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
