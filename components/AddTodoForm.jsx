
const AddTodoForm = () => {
    return (
        <div className="w-[60%] m-auto py-5 border-b border-slate-400">
            <form action="" className="flex gap-3">
                <input type="text" placeholder="Todo name" className="p-2 w-full border border-slate-400 focus:outline-none rounded-md" />
                <button className="bg-indigo-700 text-white px-5 py-2 text-xl rounded-md">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm
