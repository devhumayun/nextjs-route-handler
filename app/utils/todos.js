export const getAllTodos = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/todos`);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`);

    if (!response.ok) {
      throw new Error("Failed to delete todos");
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};
