/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markers: [
    {
      geocode: [50.243734442778184, 28.67415077841068],
      name: 'Bently',
      imageUrl:
        'https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150797034.jpg?size=626&ext=jpg',
      mark: 'xc1',
      price: 40000,
    },
    {
      geocode: [50.25425676102957, 28.65444999383057],
      name: 'BMW',
      imageUrl:
        'https://img.freepik.com/free-photo/closeup-shot-of-a-white-car-in-a-dark-background_181624-20300.jpg?size=626&ext=jpg',
      mark: 'x5',
      price: 30000,
    },
    {
      geocode: [50.254084647731936, 28.678061910364644],
      name: 'KIA',
      imageUrl:
        'https://img.freepik.com/free-photo/view-of-3d-car_23-2150796894.jpg?size=626&ext=jpg&ga=GA1.1.1656959932.1704823492&semt=ais',
      mark: 'Rio',
      price: 15000,
    },
  ],
  activeMarker: {},
};

const markersSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {
    initActiveMarker(state, action) {
      state.activeMarker = action.payload;
    },
    deleteActiveMarker(state) {
      state.activeMarker = {};
    },
  },
});

export const { initActiveMarker, deleteActiveMarker } = markersSlice.actions;

export default markersSlice.reducer;
