function Button({ id, children }) {

  const log = () => console.log(children)

  return <button onClick={log}>{children}</button>

}

export default Button