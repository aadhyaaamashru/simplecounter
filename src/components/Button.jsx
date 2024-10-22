
const Button = ({
  text='Click me...',
  onClick
}) => {
  return (
    <button 
      className="bg-white py-1 px-2 rounded-lg text-lg font-bold hover:scale-105"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button