import React from 'react'
import { useSelector } from 'react-redux'
import { JournaEntry } from './JournaEntry'

export const JournalEntries = () => {

  const {notes} = useSelector(state => state.notes);

  return (
    <div className='journal__entries'>

      {
        notes.map( note => (
          <JournaEntry 
          key={note.id} 
          {...note}
          /> 
        ))
      }

    </div>
  )
}
