import {routes} from "@/router"
import {useRoutes} from "react-router-dom"
import {FC} from "react";

const App: FC = () => {
  return useRoutes(routes)
}

export default App