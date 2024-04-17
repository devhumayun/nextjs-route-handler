import { todos } from "@/data/data";

/**
 * Get all todos
 */
export const GET = async () => {
  if (!todos) {
    return Response.json("No todos there");
  }

  return Response.json(todos);
};

/**
 * create a new todo
 */
export const POST = async (request) => {
  const todo = await request.json();

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
  };

  todos.push(newTodo);

  return new Response(JSON.stringify(newTodo), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
