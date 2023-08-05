import React from 'react'
import Sidebar from '../components/Sidebar'
import AskDoubtsBanner from '../components/AskDoubtsBanner'
import ToggleButton from '../components/ToggleButton'
import Pagination from '../components/Pagination'


const AskDoubt = () => {
  return (
    <div>
      <Sidebar/>
      <div className='p-4 sm:ml-64 space-y-6'>
        <AskDoubtsBanner/>
        <ToggleButton/>
        <Pagination/>
      </div>
    </div>
  )
}

export default AskDoubt
