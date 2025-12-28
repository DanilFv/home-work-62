import type {IWorks} from '../../../types';
import * as React from 'react';
import './WorkBlockItems.css';

interface Props {
    works: IWorks;
}

const WorkBlockItems: React.FC<Props> = ({works}) => {
    return (
        <div className="work-card">
            <div className="work-image-wrapper">
                <img src={works.image} alt="Project 1" />
                <div className="work-overlay">
                <div className="work-info">
                    <h3>{works.title}</h3>
                    <p>{works.category}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WorkBlockItems;