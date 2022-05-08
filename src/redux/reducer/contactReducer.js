import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';

const initialState = { items: [], filter: '' };

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    save: (state, { payload }) => {
      const { name, number } = payload;
      state.items.push({ name: name.toLowerCase(), number, id: nanoid() }); //immer
    },

    remove: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

//selector
export const contacts = state => state.contacts.items;
export const filter = state => state.contacts.filter;

export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { save, remove, setFilter } = contactSlice.actions;
