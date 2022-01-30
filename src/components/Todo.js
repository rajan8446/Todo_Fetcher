import React, { useEffect, useState } from 'react';
import '../styles/App.css';



export const Todo = ({ page }) => {

    const [filter, setFilter] = useState([]);
    const [complete, setComplete] = useState(true);
    const [inComplete, setInComplete] = useState(true);

    useEffect(() => {
        setFilter(page)
    }, [])

    useEffect(() => {
        if (complete && inComplete) {
            setFilter(page)
        }
        else if (complete) {
            setFilter(page.filter(ele => ele.completed))
        }
        else {
            setFilter(page.filter(ele => !ele.completed))
        }
    }, [complete, inComplete])

    const handleCheck = (type, e) => {
        if (type == 'complete') {
            setComplete(e.target.checked)
        }
        else {
            setInComplete(e.target.checked)


        }
    }

    return (
        <div>
            <ol>
                {
                    filter.filter((ele, i) => i < 20).map((item) => {
                        return <li key={item.id} > <div className="todo todo-text" id={"todo-" + item.id}><div className="todo-title"> {item.title} </div> <div className="todo-status">{item.completed ? 'complete' : 'incomplete'}</div> </div></li>
                    })
                }
            </ol>
            <div id="filter-holder">
                <div id="completed-checkbox" >
                    Complete:<input type="checkbox" checked={complete} onChange={(e) => { handleCheck('complete', e) }} />
                </div>
                <div id="incompleted-checkbox">
                    Incomplete:<input type="checkbox" checked={inComplete} onChange={(e) => { handleCheck('incomplete', e) }} />
                </div>
            </div>
        </div>
    )
}