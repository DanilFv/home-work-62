import MainInfoBlock from '../../components/MainInfoBlock/MainInfoBlock.tsx';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <MainInfoBlock clickOnMore={() => navigate('/works')} />
    );
};

export default Home;