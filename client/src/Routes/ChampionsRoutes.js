import { Route, Routes } from "react-router-dom"
import ChampionForm from "../Pages/Champions/ChampionForm"
import ChampionHome from "../Pages/Champions/ChampionHome"
import NoMatch from "../Pages/NoMatch"

export const ChampionsRoutes = () =>{
  return(
    <Routes>
      <Route index element={<ChampionHome/>}/>
      <Route path="/:id/form" element={<ChampionForm/>}/>

      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}