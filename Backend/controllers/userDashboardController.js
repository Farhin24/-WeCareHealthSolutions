import AppointmentSchemaModel from "../models/appointmentBookingModel.js";
import PModel from "../models/pathalogyModel.js";

const getAppointments = async (req, res) => {
  res.json(await AppointmentSchemaModel.find({ email: req.query.email }));
};

const getLapReports = async (req, res) => {
  res.json(await PModel.find({ patientEmail: req.query.email }));
};
export { getAppointments, getLapReports };
