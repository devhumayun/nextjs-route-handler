"use client"
import { deleteTodo } from "@/app/utils/todos";
import { RxCross1 } from "react-icons/rx";
const DeleteTodo = ({ id }) => {

    const handleDeleteTodo = async (id) => {
        if (window.confirm("Do you want to delete this todo")) {
            deleteTodo(id)
        }
    }

    return (
        <RxCross1 className="cursor-pointer" onClick={handleDeleteTodo} />
    )
}

export default DeleteTodo
