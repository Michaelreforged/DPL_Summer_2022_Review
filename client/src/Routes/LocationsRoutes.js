import { Route, Routes } from "react-router-dom"
import LocationChampions from "../Pages/Locations/LocationChampions"
import LocationHome from "../Pages/Locations/LocationHome"
import NoMatch from "../Pages/NoMatch"

export const LocationsRoutes = () =>{
  return(
    <Routes>
      <Route index element={<LocationHome />}/>
      {/* <Route path="/:id" element={<LocationShow/>} */}
      <Route path="/:id/champions" element={<LocationChampions/>}/>
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}