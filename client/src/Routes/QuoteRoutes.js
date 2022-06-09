import { Route, Routes } from "react-router-dom"
import QuotesHome from "../Pages/Quotes/QuotesHome"


export const QuoteRoutes = ()=>{
  return(
    <Routes>
      <Route index element={<QuotesHome/>}/>
    </Routes>
  )
}
