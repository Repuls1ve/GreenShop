import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {IAuthErrorResponse, IAuthSuccessResponse} from '../../types/responses/IAuthResponse'
import {IUser, IUserLogin, IUserRegister} from '../../models/IUser'

import errorHandler from '../../utils/error-handler'
import UserService from '../../services/user-service'

interface UserState {
    isAuth: boolean
    isLoading: boolean
    isRefreshLoading: boolean
    isRefreshError: boolean
    isError: boolean
    user?: IUser
    error?: string
    refreshError?: string
}

const initialState: UserState = {
    isAuth: false,
    isLoading: false,
    isRefreshLoading: false,
    isRefreshError: false,
    isError: false
}

const unexpectedError: IAuthErrorResponse = {
    error: 1,
    message: 'Unexpected error'
}

export const register = createAsyncThunk<
    IAuthSuccessResponse,
    IUserRegister,
    {rejectValue: IAuthErrorResponse}
>(
    'user/register',
    async (credentials: IUserRegister, thunkAPI) => {
        try {
            const response = await UserService.register(credentials)
            const data = response.data
            return data
        } catch (err) {
            const data = errorHandler<IAuthErrorResponse>(err, unexpectedError)
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const login = createAsyncThunk<
    IAuthSuccessResponse,
    IUserLogin,
    {rejectValue: IAuthErrorResponse}
>(
    'user/login',
    async (credentials: IUserLogin, thunkAPI) => {
        try {
            const response = await UserService.login(credentials)
            const data = response.data
            return data
        } catch (err) {
            const data = errorHandler<IAuthErrorResponse>(err, unexpectedError)
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const refresh = createAsyncThunk<
    IAuthSuccessResponse,
    void,
    {rejectValue: IAuthErrorResponse}
>(
    'user/refresh',
    async (_, thunkAPI) => {
        try {
            const response = await UserService.refresh()
            const data = response.data
            return data
        } catch (err) {
            const data = errorHandler<IAuthErrorResponse>(err, unexpectedError)
            return thunkAPI.rejectWithValue(data)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.isAuth = true
            state.isLoading = false
            state.isError = false
            state.user = action.payload.user
            state.error = undefined
        })
        builder.addCase(register.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(register.rejected, (state, action) => {
            state.isAuth = false
            state.isLoading = false
            state.isError = true
            state.user = undefined
            state.error = action.payload?.message
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuth = true
            state.isLoading = false
            state.isError = false
            state.user = action.payload.user
            state.error = undefined
        })
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isAuth = false
            state.isLoading = false
            state.isError = true
            state.user = undefined
            state.error = action.payload?.message
        })

        builder.addCase(refresh.fulfilled, (state, action) => {
            state.isAuth = true
            state.isRefreshLoading = false
            state.isRefreshError = false
            state.user = action.payload.user
            state.refreshError = undefined
        })
        builder.addCase(refresh.pending, (state, action) => {
            state.isRefreshLoading = true
        })
        builder.addCase(refresh.rejected, (state, action) => {
            state.isAuth = false
            state.isRefreshLoading = false
            state.isRefreshError = true
            state.user = undefined
            state.refreshError = action.payload?.message
        })
    }
})

export default userSlice.reducer