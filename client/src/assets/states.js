import moment from "moment";
import { nanoid } from "@reduxjs/toolkit";

export const authDataState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
};

export const scheduleDefEvenState = {
  id: nanoid(14),
  title: '',
  date: moment(),
  moment: null,
  hourFrom: '08:00',
  hourTill: '08:30',
  remindAt: '',
  hourFromPx: '0%',
  hourTillPx: '93%',
  guests: [],
  location: 'Google Meet',
  locationLink: '',
  description: {
    id: '',
    content: '',
    date: moment(),
    creationTime:'',
  },
  tasks: [],
} 

export const dateBlock = {
  date: '',
  notesCards: [],
  calendarCards: [],
  todoCards: {
    current: [],
    completed: [],
    deleted: [],
  },
};

