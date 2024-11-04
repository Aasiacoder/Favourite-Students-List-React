import { useContext } from "react"
import { Context } from "./StudentsContext"


const FavouriteStudents = () => {

    const { listofAll, favouriteList, setFavouriteList } = useContext(Context)
    
    const removeFavourite = (item) => {
        setFavouriteList(favouriteList.filter((fav) =>fav !== item))
    }

    return (
        <div className=" border-x-pink-500 flex flex-col p-5 m-5 gap-5">
            {
                favouriteList.map((item, index) => {
                    return <>
                        <h1 key={index} className="flex justify-between align-middle gap-20">
                            {index +1}. {item}
                            <button onClick={()=> removeFavourite(item)} 
                            className=" font-medium bg-pink-500 hover:bg-pink-400 border rounded-md p-1 shadow-xl">
                                Remove</button>
                        </h1>
                        </>
                })
            }
        </div>
    )
}

export default FavouriteStudents