import Main from "./components/Main"
import languages from "./data/languages"


function App() {

  return (
    <>
      <h1>Learn Web Development</h1>
      <Main data={languages} />
    </>
  )
}

export default App
