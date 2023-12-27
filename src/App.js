import { GlobalStyles } from 'assets/styles/GlobalStyles';
import Header from 'components/common/layout/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
