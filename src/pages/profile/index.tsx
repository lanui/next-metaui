import type { NextPage } from 'next'
import { useState } from 'react'

const UserIndex: NextPage = () => {
  const [user, setUser] = useState('')

  const onSetUserHanle = () => setUser('abc')

  return (
    <div className='user-index'>
      <header>
        <div>
          <img src='/images/avatar/lamborcar.png' alt='Lamborghini' />
        </div>
      </header>
      <div className='section'>
        <input />
        <button onClick={onSetUserHanle}>Set User</button>
        <span>{user || ''}</span>
      </div>
    </div>
  )
}

export default UserIndex
