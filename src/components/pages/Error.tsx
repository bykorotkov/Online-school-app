import React, { FC } from 'react'

const Error: FC = () => {
  return (
    <div>
        <h1 style={{color: 'red', display:'flex', alignItems: 'center', justifyContent:'center', marginTop: 400}}>
            Non-existing page!
        </h1>
    </div>
  )
}

export default Error