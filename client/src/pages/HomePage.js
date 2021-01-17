import React from 'react';


// Рендер карточек
function RenderCard() {
  return (
    <div className="card-block">
      <div className="avatar">
        <img className="avatar-img" src="" alt="avatar"></img>
      </div>
      <p className="first-name"></p>
      <p className="last-name"></p>
    </div>
  );
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
            <button className="btn-previous-page">&#129044;</button>
          </div>
  
          <div className="cards">
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <br/>
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <br/>
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
          </div>
  
          <div className="next-page">
            <button className="btn-next-page">&#129046;</button>
          </div>
        </div>
      </div>
    );
}
  
export default HomePage;