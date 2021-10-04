import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Componentes from './Componentes';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Dashboard from './Views/Dashboard';

function App() {
  return (
    <div className='wrapper'>
      {/* Preloader */}
      {/* <div className='preloader flex-column justify-content-center align-items-center'>
        <img className='animation__shake' src='dist/img/AdminLTELogo.png' alt='AdminLTELogo' height='60' width='60' />
      </div> */}

      <Nav />
      <Sidebar />

      <div className='content-wrapper'>
        <Switch>
          <Route path={'/'} exact={true} component={Dashboard} />
          <Route path={'/dashboard'} exact={true} component={Dashboard} />
          <Route path={'/componentes'} exact={true} component={Componentes} />
          <Route
            path={'*'}
            exact={true}
            component={() => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  paddingTop: '200px',
                  fontSize: '84pt',
                }}
              >
                <span>404</span>
              </div>
            )}
          />
        </Switch>
      </div>

      <footer className='main-footer'>
        <strong>
          Copyright &copy; 2014-2021 <a href='https://adminlte.io'>AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className='float-right d-none d-sm-inline-block'>
          <b>Version</b> 3.1.0
        </div>
      </footer>

      {/* Control Sidebar */}
      <aside className='control-sidebar control-sidebar-dark'>{/* Control sidebar content goes here */}</aside>
      {/* /.control-sidebar */}
      {/* ./wrapper */}
    </div>
  );
}

export default App;
