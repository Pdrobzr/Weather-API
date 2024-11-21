import { Weather } from "../interfaces/inteface"

const Card = ({ current, location, children }: Weather) => {
    return (
        <div className='bg-white rounded-md w-80 h-72 flex flex-col items-center gap-2 shadow-lg justify-center relative'>

            {children}

            <strong className="text-2xl">{Math.round(current.temp_c)}ºC</strong>
            <img src={current.condition.icon} alt="Icone do clima" />

            <h1 className="text-lg"><strong>{location.name}</strong></h1>
            <h2>{location.region}, {location.country}</h2>

        </div>
    )
}

export default Card