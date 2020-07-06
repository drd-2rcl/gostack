import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsController from '../controllers/AppointmentsController';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsController: AppointmentsController;

  constructor(appointmentsController: AppointmentsController) {
    this.appointmentsController = appointmentsController;
  }

  public run({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsController.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsController.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
