import {myWorks} from '../../globalConstants.ts';
import WorksBlock from '../../components/WorksBlock/WorksBlock.tsx';

const WorksContainer = () => {
    return (
        <div>
            <WorksBlock works={myWorks} />
        </div>
    );
};

export default WorksContainer;