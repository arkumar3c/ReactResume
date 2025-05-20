import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Layout from './Layout';
import About from './Component/About/About';
import Faq from './Component/Faq/Faq';
import PortFolio from './Component/PortFolio/PortFolio';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="faq" element={<Faq />} />
              <Route path="portfolio" element={<PortFolio />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <SearchApi /> */}
        {/* <LifeCycle /> */}
        {/* <Javascript /> */}
        {/* <TestPromise /> */}
        {/* <ExecutionContext /> */}
        {/* <CompA /> */}
        {/* <ReduxConc /> */}
        {/* <TodoList /> */}
        {/* <UseRef /> */}
        {/* <GetGithubUser /> */}

      </div>
    </Provider>
  );
}

export default App;
