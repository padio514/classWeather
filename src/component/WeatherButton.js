import { Button } from 'react-bootstrap'

const WeatherButton = ({cities, setCity, handleCityChange}) => {
  return (
    <div>
        <Button variant="danger" onClick={()=> handleCityChange("current")} >현제 위치</Button>{' '}
        { cities.map((item)=>(
            <Button key={item} variant="danger" onClick={()=>setCity(item)} >{item}</Button>
          ))}
    </div>
  )
}

export default WeatherButton