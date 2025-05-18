import React from 'react'
import { projectList } from '../projectList'

export const Project = () => {
  return (
    <section className="mb-[150px]">
      <div>
        <h3 className="relative top-[15px] left-[5px] font-['Supply_Mono'] text-[16px]">What we do</h3>
        <h2 className="font-['Grotesk'] uppercase text-[138px] mb-[120px]">Projet</h2>
      </div>
      <div className="flex gap-5">
        {projectList.map((item, index) => (
          <div key={index} className="bg-[#E72E00] text-white p-10 w-fit">
            <div className="flex justify-between">
              <div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <h5 className="text-[16px] font-['Supply_Mono']">{item.subtitle}</h5>
              </div>
              <p>{item.categorie}</p>
            </div>
            <img src={item.logo} alt={item.logo} className="h-[375px]" />
          </div>
        ))}
      </div>
    </section>
  )
}
