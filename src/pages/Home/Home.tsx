import styles from './Home.module.css'
import BikeItem from "../../components/BikeItem/BikeItem.tsx";
import {useMemo} from "react";

const cars = [
    {
        id: 1,
        name: 'Bmw GS650',
        image: '/1.webp',
        price: 680000,
    },
    {
        id: 2,
        name: 'Yamaha XVS1100',
        image: '/2.jpg',
        price: 550000,
    },
    {
        id: 3,
        name: 'Yamaha XVS400-2',
        image: '/2.jpg',
        price: 200000,
    },
]

const Home = () => {
    const filteredBikes = useMemo(() => cars.filter(car => car.price > 500000), [])


    console.log('render')
    return (
        <div>
            <h1>Bikes</h1>
            {filteredBikes.length ? filteredBikes.map((cars) => <BikeItem key={cars.id} name={cars.name} image={cars.image} price={cars.price} />) : (<div>Cписок байков пуст</div>)}
        </div>
    )
}

export default Home
