import { useContext, useState } from "react"
import { Context } from "./StudentsContext"



const ListOfStudents = () => {

    const { listofAll, favouriteList, setFavouriteList } = useContext(Context)
    const [addStudent, setAddStudent] = useState(false)

    const addFavourite = (item) => {
        if (!favouriteList.includes(item)) {
            setFavouriteList([...favouriteList, item])
            setAddStudent(false)
            setAddStudent(true)
        }
    }

    return (
        <>
            <div className="flex flex-col gap-10 p-5 m-2">
                {
                    listofAll.map((item, index) => {
                        return <>
                                <h1 key={index} className="text-lg flex justify-between align-middle gap-20">
                                    {index + 1}. {item}
                                    <button onClick={() => addFavourite(item)} 
                                    disabled={favouriteList.includes(item)} 
                                    className="font-medium bg-pink-500 hover:bg-pink-400 border rounded-md p-1 shadow-xl">
                                        Add to Favourite</button>
                                </h1>

                        </>
                    })
                }
            </div>
        </>
    )
}

export default ListOfStudents