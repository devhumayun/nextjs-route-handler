import { todos } from "@/data/data";

/**
 * Get todo by id
 */
export const GET = async (_request, { params }) => {
  const id = params.id;
  const todo = await todos.find((item) => item.id === parseInt(id));

  if (!todo) {
    return Response.json(`No todo available with this id:${id}`);
  } else {
    return Response.json(todo);
  }
};

/**
 * edit todo by id
 */
export const PATCH = async (request, { params }) => {
  const id = params.id;
  const updatedTodo = await request.json();
  const todoIndex = await todos.findIndex((item) => item.id === parseInt(id));
  todos[todoIndex].title = updatedTodo.title;
  return Response.json(todos[todoIndex]);
};

/**
 * delete todo by id
 */
export const DELETE = async (_request, { params }) => {
  const id = params.id;
  const todoIndex = await todos.findIndex((item) => item.id === parseInt(id));
  const deletedTodo = todos[todoIndex];
  todos.splice(todoIndex, 1);

  return Response.json(deletedTodo);
};
