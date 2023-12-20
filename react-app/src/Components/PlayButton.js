import './PlayButton.css'

function PlayButton({message,children}) {
  function handleClick() {
    console.log(message)
  }

  return (

      <button onClick={handleClick}>{children}</button>

  )
}

export default PlayButton
