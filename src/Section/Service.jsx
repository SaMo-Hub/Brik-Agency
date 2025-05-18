import React from "react";

export const Service = () => {

    const serviceList = [
      {icon:'',title:"Websites for the most ambitious brands", paragraphe:'Lorem ipsum dolor sit amet consectetur. Odio ut sed vitae vitae tellus laoreet sed. Nunc in leo adipiscing fermentum consequat risus. Vel eget quam duis sodales hendrerit non. Neque quis senectus bibendum facilisis nullam habitant id imperdiet quis.'},
      {icon:'',title:"Websites for the most ambitious brands", paragraphe:'Lorem ipsum dolor sit amet consectetur. Odio ut sed vitae vitae tellus laoreet sed. Nunc in leo adipiscing fermentum consequat risus. Vel eget quam duis sodales hendrerit non. Neque quis senectus bibendum facilisis nullam habitant id imperdiet quis.'},
    ]

  return (
    <section className="service">
      <div>
            <h3 className='subbtitle'>What we do</h3>
            <h2 className='title'>Service</h2>
        </div>
      <div className="serviceTexte">
        <p className="">
          Our work speaks for itself, earning recognition from Awwwards,
          Creative Circle, Communication Arts, and the Webby Awards among
          others. But more importantly, it delivers results for our clients,
          turning visitors into customers and customers into brand advocates.
        </p>

        <div className="serviceList">
        {serviceList.map((item,index)=>(
            <div className="serviceButton" id={index}>
            <div className="serviceButtonIconTexte">
              <div className="icon">
                <img src={item.icon} alt={item.icon} />
              </div>
              <p>{item.title} </p>
            </div>
              <p>{item.paragraphe} </p>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
};
