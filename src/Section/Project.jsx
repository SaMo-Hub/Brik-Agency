import React from 'react'
import { projectList } from '../projectList'
export const Project = () => {
  return (
    <section className=''>
        <div>
            <h3 className='subbtitle'>What we do</h3>
            <h2 className='title'>Projet</h2>
        </div>
        <div className='projectList'>
            {projectList.map((item,index)=>(
            <div className='projet' id={index}>
                <div className='projetTop'>
                    <div>
                        <h4 className='projetTitle'>
                        {item.title}
                        </h4>
                        <h5 className='projetSub'>
                            {item.subtitle}
                        </h5>
                    </div>
                    <p>
                        {item.categorie}
                    </p>
                </div>
                <img src={item.logo} alt={item.logo} />
            </div>
            ))}
        </div>
    </section>
  )
}
