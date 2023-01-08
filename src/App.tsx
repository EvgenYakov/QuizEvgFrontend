import React from 'react';
import {BrowserRouter,Routes, Route, NavLink} from "react-router-dom";
import Header from "./components/header/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import { pink, orange } from '@mui/material/colors';
import AuthPage from "./pages/authPage/authPage";
import HomePage from "./pages/homePage/homePage";
import SearchPage from "./pages/searchPage/searchPage";
import ModulePage from "./pages/modulePage/modulePage";
import FavoritesPage from "./pages/favoritesPage/favorites";

function App() {


    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#8e24aa',
            },
            secondary: pink,
            mode:'dark'
        },
    });
  return (
      <BrowserRouter>
          <div>
              <ThemeProvider theme={darkTheme}>
              <Header/>
              <Routes>
                  <Route path={'/auth'} element={<AuthPage/>}/>
                  <Route path={'/home'} element={<HomePage/>}/>
                  <Route path={'/search'} element={<SearchPage/>}/>
                  <Route path={'/favorites'} element={<FavoritesPage/>}/>
                  <Route path={'/module/:id'} element={<ModulePage/>}/>
                  <Route path={'/folder/:id'}/>
              </Routes>
              </ThemeProvider>
          </div>

      </BrowserRouter>
  );
}

export default App;
