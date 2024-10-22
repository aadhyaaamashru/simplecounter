import Card from "./components/Card";

function App() {

  const handleClick = ()=>{
    alert('YOU CLICK ME...')
  }

  return (
    <main className="w-full h-screen bg-slate-300 flex justify-center items-center pt-200"
    style={{ paddingTop: '70vh' }}
    > {/* Added pt-20 */}
    <Card />
  </main>
  );
}

export default App;
