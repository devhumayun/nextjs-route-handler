import { getAllTodos } from "@/app/utils/todos";
import DeleteTodo from "./DeleteTodo";

const TodosList = async () => {
    const todos = await getAllTodos()
    return (
        <div className="w-[60%] m-auto py-5">
            <h1 className="text-xl mb-3">All todos</h1>
            <div>
                <ul>
                    {
                        todos ? (
                            todos?.map((todo) => (
                                <li key={todo.id} className="flex justify-between mb-2 border p-2">
                                    <span>{todo.title}</span>
                                    <DeleteTodo id={todo.id} />
                                </li>
                            ))
                        ) : (<p> No todos available  </p>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodosList
