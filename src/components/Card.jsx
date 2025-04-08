function Card({ data }) {

  return <div>

    <h2>{data[0].title}</h2>

    <p>{data[0].description}</p>

  </div>

}

export default Card