import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';
const App = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data)
                setData(res.data.filter((ele, i) => i < 20))
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <div>
                {
                    !isLoading ? <Todo page={data} /> : <Loader />
                }
            </div>

        </>

    )
}

ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById("root")
)


export default App;
