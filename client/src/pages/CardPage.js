import React from 'react';

// Рендер страницы с полной карточкой
function RenderCardPage() {
    return (
        <div className="wrapper-cp">
            <div className="container-cp">

                <div>
                    <button className="btn-back">&#8592;</button>
                </div>

                <div className="block-header-cp">
                    <div className="avatar-cp">
                        <img className="avatar-img-cp" src="" alt="avatar"></img>
                    </div>
                    <div className="block-name-cp">
                        <p className="first-name-cp"></p>
                        <p className="last-name-cp"></p>
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
                        <p className="email-cp"></p>
                        <p className="phone-cp"></p>
                        <p className="gender-cp"></p>
                        <p className="lenguage-cp"></p>
                        <p className="job-cp"></p>
                        <p className="university-cp"></p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RenderCardPage;