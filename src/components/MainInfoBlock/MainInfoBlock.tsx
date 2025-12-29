import './MainInfoBlock.tsx.css';
import * as React from 'react';

interface Props {
    clickOnMore: () => void;
}

const MainInfoBlock: React.FC<Props> = ({clickOnMore}) => {
    return (
      <div className="info-section">
            <div className="welcome-card">
                <h1 className="welcome-title">Добро пожаловать!</h1>
                <div className="title-underline"></div>
                <p className="welcome-text">
                Приветствую! <br/> Меня зовут Данил, <br/> я графический дизайнер. <br/>
                Здесь собраны некоторые мои работы, чтобы посмотреть нажмите на кнопку ниже.
                </p>
                <button type='button' className="cta-button" onClick={clickOnMore}>Узнать больше</button>
            </div>
      </div>
    );
};

export default MainInfoBlock;