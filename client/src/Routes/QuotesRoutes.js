import { Route, Routes } from "react-router-dom"
import NoMatch from "../Pages/NoMatch"
import QouteHome from "../Pages/Quotes/QuoteHome"

export const QuotesRoutes = () =>{
  return(
    <Routes>
      <Route index element={<QouteHome/>}/>
      {/* <Route path='/:id' element={<show/>}/> */}
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}