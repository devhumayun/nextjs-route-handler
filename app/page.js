import AddTodoForm from "@/components/AddTodoForm";
import TodosList from "@/components/TodosList";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#e9e9e9] p-10">
      <div className="flex flex-col w-[70%] m-auto bg-[#ffffff] shadow-sm rounded-md">
        <h2 className="p-5 text-xl font-bold"> Todo Application </h2>
        <AddTodoForm />
        <TodosList />
      </div>
    </div>
  );
}
