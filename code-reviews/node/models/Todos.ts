interface CreateTodoInput {
  title: string;
}

/**
 * Todos is just a mock/fake database driver (think mongoose, knex, sequalize),
 * so that we didn't need to setup a whole application for the sake of this code review excersie
 * So, just assume this is a real driver and the functions actually work
 */
const Todos = {
  create(data: CreateTodoInput) {},
  update(query: any, modifier: any) {},
  updateOne(query: any, modifier: any) {},
  delete({ id }) {},
  find(query: any) {},
  findOne(query: any) {},
};

export default Todos;
