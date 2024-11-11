import { useState } from "react"
import { Weather } from "./interfaces/inteface";

function App() {

  const KEY = import.meta.env.VITE_REACT_APP_KEY;

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<Weather>();


  const fetchApi = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1//current.json?key=${KEY}&q=${city}`);
    const data = await response.json();
    setWeather(data);
  }

  return (
    <>

      <div className='h-screen flex items-center justify-center gap-8 flex-col bg-slate-200'>

        <div className="flex gap-2">

          <input className='h-8 border-2 border-black rounded-md' type="text" onChange={(e) => setCity(e.target.value)} />
          <button className="h-8 w-16 border-2 rounded-md bg-blue-500 text-white" onClick={fetchApi} >Enviar</button>

        </div>

        {weather ? (
          <div className='bg-white rounded-md w-80 h-72 flex flex-col items-center justify-center gap-2 shadow-lg'>

            <div>


              <strong className="text-2xl">{Math.round(weather.current.temp_c)}ºC  </strong>
              <img src={weather.current.condition.icon} alt="" />


            </div>

            <h1 className="text-lg"><strong>{weather.location.name}</strong></h1>
            <h2>{weather.location.region}, {weather.location.country}</h2>


          </div>
        ) : <h1>Digite alguma cidade...</h1>
        }
      </div>
    </>
  )
}

export default App
