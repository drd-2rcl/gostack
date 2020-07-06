import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsController from '../controllers/AppointmentsController';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsController.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsController,
    );

    const appointment = createAppointment.run({ date: parsedDate, provider });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
