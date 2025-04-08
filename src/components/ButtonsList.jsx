import Button from "./Button"
import languages from "../data/languages"

function ButtonsList() {

  return <div>

    {languages.map(language => <Button key={language.id}>{language.title}</Button>)}

  </div>


}

export default ButtonsList