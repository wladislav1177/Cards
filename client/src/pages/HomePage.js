import React, { useState,  useEffect } from 'react';

// Рендер главной страницы
function HomePage() {

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
  const [pageNumber, setPageNumber] = useState([]);
  const [numOfPages, setNumberOfPages] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        ({resultPeople, page, numberOfPages}) => {
          setIsLoaded(true);
          setItems(resultPeople);
          setPageNumber(page);
          setNumberOfPages(numberOfPages);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // Нажатие на карточку
  function ClickOnCard(e) {
    const personID = e.target.id;
    const url = `/card/${personID}`;
    window.location.href = url;
  }

  // Следующая страница
  function NextPage() {
    if (pageNumber != numOfPages) {
      window.location.href = `/?page=${parseInt(pageNumber) + 1}`;
    }
  }

  // Предыдущая страница
  function previousPage() {
    if (pageNumber != 1) {
      window.location.href = `/?page=${parseInt(pageNumber) - 1}`;
    }
  }

  // Рендер
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <div className="header">
          <h1>Карточки</h1>
        </div>
    
        <div className="container">
          <div className="previous-page">
            <button className="btn-previous-page" onClick={previousPage}>&#129044;</button>
          </div>
    
          <div className="cards">
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
          </div>
    
          <div className="next-page">
            <button className="btn-next-page" onClick={NextPage}>&#129046;</button>
          </div>
        </div>    
      </div>
    );
  }
}
  
export default HomePage;