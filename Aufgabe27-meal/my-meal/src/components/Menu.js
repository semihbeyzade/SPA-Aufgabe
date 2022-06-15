import React from 'react'
import {GiCookingPot} from 'react-icons/gi'
import {RiDeleteBinLine} from 'react-icons/ri'
import {AiFillLike} from 'react-icons/ai'

function Menu({data, addToLike, addToCook , handleRemove}) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-dark'>
    <h2 className='mb-5'>Our Menu</h2>
    <div className="row row-cols-1 row-cols-md-4 g-4 container">
        {
           Object.entries(data).length !== 0 && data.meals.map((d, i) => {
                return (
                   <div class="col " id={d.idMeal}>
                   <div className="card h-100" >
                   <img src={d.strMealThumb} class="card-img-top w-100" alt="..." />
                   <div className="card-body">
                   <h5 className="card-title mb-4">{d.strMeal}</h5>
                   <div className='d-flex justify-content-between'>
                   <button onClick={() => addToLike(d)} id="icon1" className='fs-3'>< AiFillLike /></button>
                   <button onClick={() => addToCook(d)}  id="icon2" className=' fs-3 '><GiCookingPot/></button>
                   <button onClick={() => handleRemove(i.idMeal)} className=' fs-4' id='icon3' >< RiDeleteBinLine /></button>
                   </div>
                  </div>
                </div>
               </div> 
                )
            })
        }
     
 
</div>
   </div>
  )
}

export default Menu