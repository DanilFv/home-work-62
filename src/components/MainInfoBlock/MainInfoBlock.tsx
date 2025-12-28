import './MainInfoBlock.tsx.css';

const MainInfoBlock = () => {
    return (
      <div className="info-section">
            <div className="welcome-card">
                <h1 className="welcome-title">Добро пожаловать!</h1>
                <div className="title-underline"></div>
                <p className="welcome-text">
                Меня зовут Данил, <br/> я графический дизайнер. <br/>
                Здесь собраны некоторые мои работы, чтобы посмотреть нажмите на кнопку ниже.
                </p>
                <button className="cta-button">Узнать больше</button>
            </div>
      </div>
    );
};

export default MainInfoBlock;