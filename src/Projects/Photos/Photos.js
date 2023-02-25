import React, { useState, useEffect } from 'react';
import './Photos.style.scss';
import { Collection } from './Collection.jsx'

export const Photos = () => {
  const [ collection, setCollection ] = useState([]);
  const [ loading, setLoading] = useState(true)
  const [searchValue, setSearchValue ] = useState('');
  const [ categoryId, setCategoryId ] = useState(0)
  const categories = [
    { "name": "All" },
    { "name": "Sea" },
    { "name": "Mountain" },
    { "name": "Architecture" },
  ]
  useEffect(() => {
   setLoading(true);
    fetch(`https://photo.free.beeceptor.com/photo?${categoryId ? `category=${categoryId}` : ''}`)
    .then((res) => res.json())
    .then((json) => {
      setCollection(json)
    })
    .catch(err => {
      console.warn('Error')
      alert('Error')
    })
    .finally(() => setLoading(false))
  }, [categoryId])
  return (
    <div className="Photos">
      <h1>My collection of photo</h1>
      <div className="top">
        <ul className="tags">
          {
            categories.map((el, i) => (
              <li onClick={() => setCategoryId(i)} className={categoryId ===  i ? 'active' : ''} key={i}>{el.name}</li>
            ))
          }
        </ul>
        <input className="search-input" placeholder="Seacrh by name" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </div>
      <div className="content">
    {loading ? (
      <h2>Loading...</h2>
    ): (
      collection.filter(el => {
        return el.name.toLowerCase().includes(searchValue.toLowerCase())
      }).map((el, index) => (

        <Collection
        name={el.name}
        images={el.photos}
        key={index}
        />
        ))
    )}
      </div>

  </div>
  )
}
