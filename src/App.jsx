import ButtonsList from "./components/ButtonsList"
import Card from "./components/Card"

import languages from "./data/languages"



function App() {

  return (
    <>
      <h1>Learn Web Development</h1>
      <ButtonsList data={languages} />
      <Card data={languages} />
    </>
  )
}

export default App
