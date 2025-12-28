import type {IWorks} from '../../types';
import './WorksBlock.css';
import * as React from 'react';
import WorkBlockItems from './WorkBlockItems/WorkBlockItems.tsx';

interface Props {
    works: IWorks[];
}

const WorksBlock: React.FC<Props> = ({works}) => {
    return (
        <div className="works-container">
            <h2 className="works-title">Мои работы</h2>
            <div className="title-underline"></div>

            <div className="works-grid">
                {works.map((work: IWorks) => (
                    <WorkBlockItems works={work} />
                ))}
            </div>
        </div>
    );
};

export default WorksBlock;