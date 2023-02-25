import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ items, isLoading, searchValue, onChangeSearchValue, invites, onClickInvite, onClickSendInvates} ) => {
  console.log(searchValue)
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>

        <input type="text" placeholder="Find user..." value={searchValue} onChange={onChangeSearchValue}/>

      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {
            items.filter((el) => {
                // toLowerCase - обязательно конвертировать
              const fullname = (el.first_name + el.last_name).toLowerCase();



              if(fullname.includes(searchValue.toLowerCase()) || el.email.includes(searchValue.toLowerCase())) {
                return true
              }

            }).map(el => (
              // передаем всі данні до елемента
              <User key={el.id} {...el} isInvited={invites.includes(el.id)} onClickInvite={onClickInvite} />
            ))
          }
        </ul>
      )}

        <button className="send-invite-btn" onClick={() => onClickSendInvates()}>Send an invitation</button>

    </>
  );
};