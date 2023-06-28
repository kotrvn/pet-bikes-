import BikeCard from "../../components/BikeCard/BikeCard.tsx";
import {Header} from "../../components/layout/Header";
import {Footer} from "../../components/layout/Footer";

import styles from './Home.module.css'
import {useGetBikesQuery} from "../../services/bikesApi.ts";

const Home = () => {

    // @ts-ignore
    const {data: bikes = [] } = useGetBikesQuery();

    return (
        <>
            <Header />
            <h1>Bikes List</h1>
            <div className={styles.list}>
                {bikes.length ? bikes.map((bike) => <BikeCard key={bike.id} {...bike} />) : (<div>Cписок байков пуст</div>)}
            </div>
            <Footer />
        </>

    )
}

export default Home
