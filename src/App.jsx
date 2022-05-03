import { useState } from "react"  
import Contacto from "./components/contacto/Contacto"
import Dirigente from "./components/dirigente/Dirigente"
import Ejecutivos from "./components/ejecutivos/Ejecutivos"
import Header from "./components/header/Header"
import HistoryP from "./components/history/HistoryP"
import Inicio from "./components/inicio/Inicio"

function App() {
  const [pagina,setPagina] = useState(1);

  return (
    <div className="App">
      <Header setPagina={setPagina} />
      {pagina === 1 && <Inicio />}
      {pagina === 2 && <HistoryP />}
      {pagina === 3 && <Dirigente />}
      {pagina === 4 && <Ejecutivos />}
      <Contacto />
    </div>
  )
}

export default App
