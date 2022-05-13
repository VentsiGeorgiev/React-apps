import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext)
  useEffect(() => {
    fetchUsers()
  }, [])



  if (!loading) {
    return (
      <>
        <h1 className='user-title'>User Results</h1>
        <div className='user-list users'>{users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}</div>
      </>
    )
  } else {
    return <Spinner />
  }


}
export default UserResults