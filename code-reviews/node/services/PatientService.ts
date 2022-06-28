import Patients from "../models/Patients";

export default class PatientService {
  async createPatient(firstName: string, lastName: string, email: string) {
    await Patients.create({
      firstName,
      lastName,
      email,
    });
  }

  async deletePatient(id: string) {}

  async updateOnePatient(query: any, modifier: any) {}

  async updateManyPatient(query: any, modifier: any) {}

  async getOnePatient(id: string) {}

  async getManyPatients() {}
}
