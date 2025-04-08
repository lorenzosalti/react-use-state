function Button({ id, openCard, children }) {

  return <button onClick={openCard}> {children} </button>

}

export default Button