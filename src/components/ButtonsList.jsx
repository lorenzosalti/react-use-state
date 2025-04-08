import Button from "./Button"


function ButtonsList({ data }) {

  return <div>

    {data.map(language => <Button key={language.id}>{language.title}</Button>)}

  </div>


}

export default ButtonsList