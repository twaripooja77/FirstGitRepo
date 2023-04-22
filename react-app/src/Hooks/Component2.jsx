import React, { useEffect, useContext} from 'react'
import Component3 from './Component3'
import { useState } from 'react'

const Component2 = ({user}) => {
  return (
    <div>
        <Component3 user={user}/>
    </div>
  )
}

export default Component2