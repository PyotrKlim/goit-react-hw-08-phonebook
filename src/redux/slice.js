import { createSlice } from '@reduxjs/toolkit';
import { addContact } from './operations';
import { deleteContact } from './operations';
import { getContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
    error: null,
    isLoading: false,
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)

      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
      });
  },
});

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
