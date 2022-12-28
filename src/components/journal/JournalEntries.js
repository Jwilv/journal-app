import React from 'react'
import { JournaEntry } from './JournaEntry'

export const JournalEntries = () => {

  const entries = [1, 2, 3, 4]

  return (
    <div className='journal__entries'>

      {
        entries.map( value => (
          <JournaEntry key={value} /> 
        ))
      }

    </div>
  )
}
