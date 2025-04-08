import Button from "./Button"
import Card from "./Card"

import { useState } from 'react'


function Main({ data }) {

  const [currentId, setId] = useState(1)

  return <>
    <div>

      {data.map(language =>
        <Button key={language.id} openCard={() => setId(language.id)}>
          {language.title}
        </Button>
      )}

    </div>

    <Card title={data[currentId - 1].title} content={data[currentId - 1].description} />

  </>


}

export default Main