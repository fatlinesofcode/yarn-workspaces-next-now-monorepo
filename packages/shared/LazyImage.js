import React from 'react'
import {Lazy} from "react-lazy";

const LazyImage = () => (
  <div>
    <Lazy>
      <img src='https://placekitten.com/200/150' />
    </Lazy>
    {/* language=SCSS */}
    <style jsx>
      {`
        div{ background-color: blue; min-height: 10px;}
      `}
    </style>
  </div>

)

export default LazyImage
