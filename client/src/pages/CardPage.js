import React, { useState,  useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 


// Кнопка назад
function BtnBack() {
    const history = useHistory();
    history.push('/');
}


// Рендер страницы с полной карточкой
function RenderCardPage() {

    // Запрос
    const path = window.location.pathname;
    let url = `http://127.0.0.1:5000${path}`;
    console.log(url);

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
            <div className="wrapper-cp">
                <div className="container-cp">
                    <div>
                        <button className="btn-back" onClick={''}>&#8592;</button>
                    </div>

                    <div className="block-header-cp">
                        <div className="avatar-cp">
                            <img className="avatar-img-cp" src={items.avatar} alt="avatar"></img>
                        </div>
                        <div className="block-name-cp">
                            <p className="first-name-cp">{items.first_name}</p>
                            <p className="last-name-cp">{items.last_name}</p>
                        </div>
                    </div>

                    <div className="block-body-cp">
                        <div className="body-left-cp">
                            <p>Email:</p>
                            <p>Телефон:</p>
                            <p>Пол:</p>
                            <p>Язык:</p>
                            <p>Работа:</p>
                            <p>Университет:</p>
                        </div>
                        <div className="body-right-cp">
                            <p className="email-cp">{items.email}</p>
                            <p className="phone-cp">{items.phone}</p>
                            <p className="gender-cp">{items.gender}</p>
                            <p className="lenguage-cp">{items.language}</p>
                            <p className="job-cp">{items.job}</p>
                            <p className="university-cp">{items.university}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RenderCardPage;