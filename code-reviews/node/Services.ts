import Users from "./models/Users";
import Todos from "./models/Todos";

/**
 * UserService: CRUD functions for Users
 */
export class UserService {
  async createUser(firstName: string, lastName: string, email: string) {
    await Users.create({
      firstName,
      lastName,
      email,
    });
  }

  async deleteUser(id: string) {
    await Users.delete({
      id,
    });
  }

  async updateOneUser(query: any, modifier: any) {
    await Users.updateOne(query, modifier);
  }

  async updateManyUser(query: any, modifier: any) {
    await Users.update(query, modifier);
  }

  async getOneUser(id: string) {
    return await Users.findOne({ id });
  }

  async getManyUsers(query: any) {
    return await Users.find(query);
  }
}

/**
 * TodosService: CRUD functions for Todos
 */
export class TodosService {
  async createOneTodo(title: string) {
    await Todos.create({
      title,
    });
  }

  async deleteTodo(id: string) {
    await Todos.delete({
      id,
    });
  }

  async updateTodo(query: any, modifier: any) {
    await Todos.updateOne(query, modifier);
  }

  async updateTodos(query: any, modifier: any) {
    await Todos.update(query, modifier);
  }

  async todo(id: string) {
    return await Todos.findOne({ id });
  }

  async getManyTodos(query: any) {
    return await Todos.find(query);
  }
}
