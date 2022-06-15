import React from 'react'

function Cooked({cooked}) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 container">
        {
           cooked.map((c,i) => {
            return(
                <div class="col " id={c.idMeal}>
               <div className="card h-100" >
               <img src={c.strMealThumb} class="card-img-top w-100" alt="..." />
               <div className="card-body">
               <h5 className="card-title">{c.strMeal}</h5>
               <button /* onClick={() => addToLike(d)}  */className='btn btn-info '>Like</button>
               <button /* onClick={() => addToCook(d)}  */ className='btn btn-warning'>Gekocht</button>
               <button className='btn btn-danger' >Delete</button>
              </div>
            </div>
           </div> 
            )
        })
        }
    </div>
  )
}

export default Cooked