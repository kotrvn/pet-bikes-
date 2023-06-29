import {useEffect, useRef, useState} from "react";

const goods = [
    {
        name: 'fruits',
        data: [
            {name: 'apple', description: 'Яблоко'             },
            {name: 'pineapple', description: 'Ананас'},
        ],
    },
    {
        name: 'vegetables',
        data: [
            {name: 'potato', description: 'Картошка'},
            {name: 'carrot', description: 'Морковь'},
        ],
    },
]

const Bikes = () => {
    const [count, setCount] = useState(0);
    const [isTimerActive, setTimerActive] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('vegetables')
    const [selectedGood, setSelectedGood] = useState([])
    const [selectedItem, setSelectedItem] = useState('potato')

    useEffect(() => {
        let timer
        if (isTimerActive) {
            timer = setInterval(() => setCount(count + 1), 1000)
        }
        return () => clearInterval(timer)

    }, [isTimerActive, count])

    const selectedCat = goods.filter((item) => item.name === selectedCategory)
    const { data} = selectedCat[0]
    // @ts-ignore
    const item = data.length && data.find((item) => item.name === selectedItem)


    useEffect(() => {
        setSelectedGood(data)
    }, [data])

    useEffect(() => {
        if (selectedCategory === 'vegetables') {
            setSelectedItem('potato')
        } else {
            setSelectedItem('apple')
        }
    }, [selectedCategory])


    return (
        <>
        <div>
            <button style={{ width: '100px'}} onClick={() => setTimerActive(!isTimerActive)}>{count}</button>
        </div>
        <div style={{ marginTop: '10px'}}>
        {goods?.map(({name, isActive}) => {
            return (
                <button
                    style={{ width: '100px', margin: '0 15px', backgroundColor: selectedCategory === name ? 'red' : "gray"}}
                    onClick={() => setSelectedCategory(name)}
                >{name}</button>)
        })}
            <div>
            {selectedGood.map((item, isActive) => {
                return (
                    <button
                        style={{ width: '100px', margin: '0 15px', backgroundColor: selectedItem === item.name ? 'red' : "gray"}}
                        onClick={() => setSelectedItem(item.name)}
                    >{item.name}</button>)
            })}
            </div>
            <p style={{ width: '200px', textAlign: 'center'}}>{item?.description}</p>

        </div>
        </>
    )
}

export default Bikes;
