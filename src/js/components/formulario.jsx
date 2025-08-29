import React, { useEffect, useState } from "react";


const Formulario = () => {

    const [username, setUsername] = useState('')
    const [savedUsernames, setSavedUsernames] = useState([])



    const [hacks, setHacks] = useState([])
    const [newHack, setNewHack] = useState({
        email: '',
        password: ''
    })


    const handleSubmitUsername = e => {
        e.preventDefault();
        setSavedUsernames([...savedUsernames, username])
        setUsername('')
    }



    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }


    const sayHi = () => console.log('hi')
    const loggered = (msg) => console.log(msg)



    const handleChangeHack = e => {
        //desestructuramos el objeto e.target
        const { name, value } = e.target
        //usamos el name para identificar la Key de nuestro objeto a actualizar
        setNewHack({ ...newHack, [name]: value })
        console.log(newHack)
    }

    const handleSubmitHack = e => {
        e.preventDefault();
        setHacks([...hacks, newHack])

    }

    /*
    SOLO UN USEEFFECT CON ARRAY DE DEPENDENCIAS VACIO POR COMPONENTE

    //cuando queremos almacenar la info de un input,
    
    1. temos que tener un estado donde se almacena
    2. para almacenar necesitamos un evento onChange en el input
    3. el input TIENE que tener como valor el estado donde se almacena la informacion
    
    */

    /*
        maneras de usar el useEffect
        1. como windows on load 
        2. como respuesta a un cambio de estado

useEffect(
()=>{} ---> funcion anonima que se va a ejecutar, igualmente se le puede pasar una funcion  
    
    ,[] ---> array de dependencias. si esta vacio, se ejecutara como window on load. sino, se ejecutara cuando el estado sea modificado

)
    */

    //useEffect como windows on load
    useEffect(() => {
        console.log('se cargo la pagina')
        sayHi()
        // ...n instrucciones/funciones/lo que sea
    }, []) // array de dependencias vacio para que sea onLoad

    //useEffect respondiendo a cambios de estados
    useEffect(() => {
        console.log('tenemos los siguientes usuarios--> ', savedUsernames);
    }, [savedUsernames]) //con dependencias para que se ejecute cada vez que sea modificado el estado que le pasamos

    useEffect(() => {
        loggered(username)
    }, [username, savedUsernames])

    return (
        <>
            <h3>El intento de Hackeo mas lame de la historia</h3>
            <form onSubmit={handleSubmitUsername}>
                <p className="form-text">Me das tu nombre de usuario????</p>
                {/* como MINIMO necesitamos usar value y onChange */}
                <input type="text" value={username} onChange={handleUsernameChange} />
                <input type="submit" value={'dar usuario'} />
            </form>

            <ul>
                {savedUsernames.map((el, i) => <li key={i}>{el}</li>)}
            </ul>


            {/*  new hack */}

            <form onSubmit={handleSubmitHack}>
                <p className="form-text">Me das tu usuario y contraseña???</p>
                <input type="email" value={newHack.email} onChange={handleChangeHack} name="email" />
                <input type="password" value={newHack.password} onChange={handleChangeHack} name="password" />
                <input type="submit" value={'dar email y pass'} />

                <ul>
                    {hacks.map((el, i) => <li key={i}>
                        <p>usuario: {el.email}</p>
                        <p>contraseña: {el.password}</p>
                    </li>)}
                </ul>

            </form>
        </>
    )
}


export default Formulario