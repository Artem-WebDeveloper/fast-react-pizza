import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { getAddress } from '../../services/apiGeocoding';
import type { Coords } from '../../types';

type UserState = {
  username: string;
  status: 'idle' | 'loading' | 'error';
  position: Coords | null;
  address: string;
  error: string | null;
};

const initialState: UserState = {
  username: '',
  status: 'idle',
  position: null,
  address: '',
  error: null,
};

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) Получаем геопозицию Юзера из API браузера
    const positionObj = await getPosition();

    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Затем мы используем API обратного геокодирования, чтобы получить описание адреса пользователя, которое затем отображается в форме заказа, чтобы пользователь мог исправить его, если он неверен
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) После возвращаем объект с нужными данными
    return { position, address };
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
        state.error = null;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? 'Something went wrong';
        // state.error =
        //   'There was a problem getting your address. Make sure to fill this field!';
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

// SELECTORS
export const getUsername = (state: RootState) => state.user.username;
