import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectMail;

export const selectSendMesageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;