import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { urlBase } from '../Constants/url';


const DetalhesPage = (props) => {

    const currentId = props.match.params._id

    const [cell, setCell] = useState([])

    useEffect(() => {
        axios
        .get(`${urlBase}/${currentId}`)
        .then((res) => {
        console.log("deu certo");
        })
        .catch((err) => {
        alert(err.message);
       })

    },[currentId])
    return (
        <div>

        </div>
    )

}

export default DetalhesPage;