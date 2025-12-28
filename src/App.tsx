import './App.css';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';
import MainInfoBlock from './components/MainInfoBlock/MainInfoBlock.tsx';
import {myWorks} from './globalConstants.ts';
import WorksBlock from './components/WorksBlock/WorksBlock.tsx';

const App = () => {

  return (
    <>
        <header>
            <ToolBar />
        </header>

        <main>
            <MainInfoBlock />
        </main>
        <WorksBlock works={myWorks} />
    </>
  )
};

export default App
