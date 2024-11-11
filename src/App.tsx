import { useState } from "react"

function App() {

  const KEY = import.meta.env.VITE_REACT_APP_KEY;

  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState<Temperature>();

  interface Temperature {
    temp_c: number,
    condition: Condition
  }

  interface Condition {
    text: string,
    icon: string
  }

  const fetchApi = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1//current.json?key=${KEY}&q=${city}`);
    const data = await response.json();
    setTemperature(data.current);
  }

  return (
    <>

      <div className='h-screen flex items-center justify-center gap-8 flex-col'>

        <div className="flex gap-2">

        <input className='h-8 border-2 border-black rounded-md' type="text" onChange={(e) => setCity(e.target.value)} />
        <button className="h-8 w-16 border-2 rounded-md bg-blue-500 text-white" onClick={fetchApi} >Enviar</button>

        </div>

        {temperature ? (
          <div className='h-2 flex items-center justify-center gap-2'>

            <h1>Temperatura: {temperature.temp_c}</h1>
            <img src={temperature.condition.icon} alt="" />

          </div>
        ) : <h1>Digite alguma cidade...</h1>
        }
      </div>
    </>
  )
}

export default App
