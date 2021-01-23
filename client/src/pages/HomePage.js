import React, { useState,  useEffect } from 'react';

// Рендер карточек
function RenderCard() {

  // Запрос
  const search = window.location.search;
  let url = '';

  if (search === '') {
    url = `http://127.0.0.1:5000/?page=1`;
  } else {
    url = `http://127.0.0.1:5000/${search}`;
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // Рендер
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <table className="table-cards">
        {items.map(item => (
          <td className="td-cards">
            <div className="card-block" id={item.id.$oid} onClick={ClickOnCard}>
              <div className="avatar">
                <img className="avatar-img" id={item.id.$oid} src={item.avatar} alt="avatar"></img>
              </div>
              <p className="first-name" id={item.id.$oid} >{item.first_name}</p>
              <p className="last-name" id={item.id.$oid} >{item.last_name}</p>
            </div>
          </td>
        ))}
      </table>
    );
  }
}

// Нажатие на карточку
function ClickOnCard(e) {
  const personID = e.target.id;
  const url = `/card/${personID}`;
  window.location.href = url;
}


// Рендер главной страницы
function HomePage() {
  return (
    <div>
      <div className="header">
        <h1>Карточки</h1>
      </div>
  
      <div className="container">
        <div className="previous-page">
          <button className="btn-previous-page" onClick={''}>&#129044;</button>
        </div>
  
        <div className="cards">
          <RenderCard />
        </div>
  
        <div className="next-page">
          <button className="btn-next-page" onClick={''}>&#129046;</button>
        </div>
      </div>    
    </div>
  );
}
  
export default HomePage;