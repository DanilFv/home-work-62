import './App.css';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';
import MainInfoBlock from './components/MainInfoBlock/MainInfoBlock.tsx';
import {Route, Routes} from 'react-router-dom';
import WorksContainer from './containers/WorksContainer/WorksContainer.tsx';


const App = () => {

  return (
    <>
        <header>
            <ToolBar />
        </header>

        <main>
            <Routes>
                <Route path='/' element={(<MainInfoBlock />)} />
                <Route path='/works' element={(<WorksContainer />)} />
                <Route path ='*' element={(<h2 className='text-center text-uppercase fw-bold mt-5 text-white'>Page not found</h2>)} />
            </Routes>
        </main>
    </>
  )
};

export default App
