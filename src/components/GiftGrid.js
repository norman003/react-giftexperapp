import React, { Fragment } from 'react'
import { useFetchGifts } from '../hooks/useFecthGifts'
import { GiftGridItem } from './GiftGridItem'

export const GiftGrid = ({category}) => {

  const {data:images,loading} = useFetchGifts(category)

  return (
    <Fragment>
      <h3 className='animate__fadeIn'>{category}</h3>
      {loading&&<p className='animate__flash'>Loading</p>}
      <div className="carg-grid">
        {
          images.map((img)=>(
            <GiftGridItem key={img.id} {...img}/>
          ))
        }
      </div>
    </Fragment>
  )
}
