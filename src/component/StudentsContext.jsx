import { createContext, useState } from "react";

const Context = createContext()

const ContextList = (data) => {
    console.log(data)

    const [listofAll, setListofAll] = useState(["Rayyan","Kajal","Suvetha","Albart","Sana"])
    const [favouriteList, setFavouriteList] = useState([])

    return (
        <Context.Provider value={{favouriteList, setFavouriteList, listofAll}}>
            {data.children}
        </Context.Provider>

    )
}

export default ContextList
export {Context}