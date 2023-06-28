import BikeCard from "../../components/BikeCard/BikeCard.tsx";
import {useEffect, useMemo, useState} from "react";
import {Header} from "../../components/layout/Header";
import {Footer} from "../../components/layout/Footer";

const Home = () => {
    const [arr, setArr] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/bikes')
            .then((response) => response.json())
            .then((data) => setArr(data))
    }, [])


    const filteredBikes = useMemo(() => arr.filter(bike => bike.price > 10000), [])

    console.log('render', arr)
    return (
        <>
            <Header />
            <div>
                <h1>Bikes List</h1>
                {filteredBikes.length ? filteredBikes.map((bike) => <BikeCard key={bike.id} name={bike.name} image={bike.picture} price={bike.price} />) : (<div>Cписок байков пуст</div>)}
            </div>
            <Footer />
        </>

    )
}

export default Home
