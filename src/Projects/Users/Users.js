import React, { useEffect, useState } from 'react';
import './Users.style.scss';
import { Success } from './component/Succes';
import { Users } from './component/Users/index';

// Тут список пользователей: https://reqres.in/api/users

export const User = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearhValue] = useState('')
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err);
      alert('Error')
    }).finally(() => setLoading(false))
  },[])

 const onChangeSearchValue = (e) => {
  setSearhValue(e.target.value)
 }

 const onClickInvite = (id) => {
  if(invites.includes(id)) {
    setInvites(prev => prev.filter(_id => _id !== id))
  } else {
    setInvites((prev)=> [...prev, id]);
  }
 }

 const onClickSendInvates = () => {
  setSuccess(true)
 }

  return (
    <div className="User">
      {
        success ? (<Success count={invites.length}/>
      ) : (
      <Users searchValue={searchValue} onChangeSearchValue={onChangeSearchValue}  items={users} isLoading={isLoading} invites={invites} onClickInvite={onClickInvite} onClickSendInvates={onClickSendInvates}/>
      )}
    </div>
  );
}
