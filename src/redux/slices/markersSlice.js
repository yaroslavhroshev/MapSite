import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markers: [
    {
      geocode: [50.243734442778184, 28.67415077841068],
      popUp: 'Монастирська площа',
    },
    {
      geocode: [50.25425676102957, 28.65444999383057],
      popUp: 'Optima Collection',
    },
    {
      geocode: [50.254084647731936, 28.678061910364644],
      popUp: 'Музей космонавтики',
    },
  ],
};

const markersSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {},
});

export default markersSlice.reducer;
