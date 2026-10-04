import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom' //permet à React Router de suivre l’URL dans le navigateur
import { Routes } from 'react-router-dom' //conteneur de toutes routes.
import { Route } from 'react-router-dom' // représente une règle : pour telle URL → afficher tel composant.
import TweetsMasterPage from './pages/TweetsMasterPage.tsx'
import TweetDetailsPage from './pages/TweetDetailsPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import AboutPage from "./pages/AboutPages.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<TweetsMasterPage />} />
          <Route path='tweets/:id' element={<TweetDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path="a-propos" element={<AboutPage />} />
        </Route >

      </Routes>


    </BrowserRouter>

  </StrictMode>,

)

//Une route, c’est simplement l’association entre une URL et ce que React doit afficher.

// exemple de chatGpt pour m'aider a mieux comprendre  chqaue elemnt
//BrowserRouter = le GPS → regarde l'URL
//Routes = la liste des destinations
//Route = une destination précise
//Layout (App) = le cadre commun du site
//Outlet = l'emplacement dans ce cadre où la page demandée s'affiche