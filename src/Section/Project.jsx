import React from 'react'
import { projectList } from '../projectList'

export const Project = () => {
  return (
    <section className=" mb-[150px]">
      <div>
        <h3 className="relative top-[15px]  left-[5px] font-['Supply_Mono'] text-[16px]">What we do</h3>
        <h2 className="font-['Grotesk'] uppercase text-[138px] mb-[120px]">Projet</h2>
      </div>
      <div className=" gap-5 flex  w-fit ">
        {projectList.map((item, index) => (
          <div key={index} className="bg-primary text-secondary p-10 w-fit">
            <div className="flex justify-between">
              <div>
                <h4 className="text-xl ">{item.title}</h4>
                <h5 className="text-[16px] font-['Supply_Mono']">{item.subtitle}</h5>
              </div>
              <div className='border-secondary/50 flex h-fit items-center rounded-sm  p-2 border' >
              <p className='font-supply '>{item.categorie}</p>
              </div>
            </div>
            <img src={item.logo} alt={item.logo} className="h-[375px] mt-24" />
          </div>
        ))}
      </div>
    </section>
  )
}
