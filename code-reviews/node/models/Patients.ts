interface CreatePatientInput {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Patients is just a mock/fake database driver (think mongoose, knex, sequalize),
 * so that we didn't need to setup a whole application for the sake of this code review excersie
 * So, just assume this is a real driver and the functions actually work
 */
const Patients = {
  create(data: CreatePatientInput) {},
  update(data: CreatePatientInput) {},
  delete() {},
  find() {},
};

export default Patients;
