import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {IAuthErrorResponse, IAuthSuccessResponse} from '../../types/responses/IAuthResponse'
import {IDefaultSuccessResponse} from '../../types/responses/IDefaultResponse'
import {IUser, IUserChangePassword, IUserEdit, IUserLogin, IUserRegister} from '../../models/IUser'

import errorHandler from '../../utils/error-handler'
import UserService from '../../services/user-service'

interface UserState {
    isAuth: boolean
    user?: IUser
    isLoading: boolean
    isError: boolean
    error?: string
    isRefreshLoading: boolean
    isRefreshError: boolean
    refreshError?: string
    isPasswordLoading: boolean
    isPasswordError: boolean
    isPasswordSuccess: boolean
    passwordError?: string
    isEditLoading: boolean
    isEditError: boolean
    isEditSuccess: boolean
    editError?: string
}

const initialState: UserState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    isRefreshLoading: false,
    isRefreshError: false,
    isPasswordLoading: false,
    isPasswordError: false,
    isPasswordSuccess: false,
    isEditLoading: false,
    isEditError: false,
    isEditSuccess: false,
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

export const changePassword = createAsyncThunk<
    IDefaultSuccessResponse,
    IUserChangePassword,
    {rejectValue: IAuthErrorResponse}
>(
    'user/changePassword',
    async (credentials: IUserChangePassword, thunkAPI) => {
        try {
            const response = await UserService.changePassword(credentials)
            const data = response.data
            return data
        } catch (err) {
            const data = errorHandler<IAuthErrorResponse>(err, unexpectedError)
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const edit = createAsyncThunk<
    IAuthSuccessResponse,
    IUserEdit,
    {rejectValue: IAuthErrorResponse}
>(
    'user/edit',
    async (fields: IUserEdit, thunkAPI) => {
        try {
            const response = await UserService.edit(fields)
            const data = response.data
            return data
        } catch (err) {
            const data = errorHandler<IAuthErrorResponse>(err, unexpectedError)
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async () => {
        await UserService.logout()
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetPasswordState: (state) => {
            state.isPasswordSuccess = false
            state.isPasswordError = false
            state.passwordError = undefined
        },
        resetEditState: (state) => {
            state.isEditSuccess = false
            state.isEditError = false
            state.editError = undefined
        }
    },
    extraReducers: builder => {
        builder.addCase(edit.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isEditSuccess = true
            state.isEditLoading = false
            state.isEditError = false
            state.editError = undefined
        })
        builder.addCase(edit.pending, (state, action) => {
            state.isEditLoading = true
        })
        builder.addCase(edit.rejected, (state, action) => {
            state.isEditSuccess = false
            state.isEditError = true
            state.isEditLoading = false
            state.editError = action.payload?.message
        })

        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.isPasswordSuccess = true
            state.isPasswordLoading = false
            state.isPasswordError = false
            state.passwordError = undefined
        })
        builder.addCase(changePassword.pending, (state, action) => {
            state.isPasswordLoading = true
        })
        builder.addCase(changePassword.rejected, (state, action) => {
            state.isPasswordSuccess = false
            state.isPasswordError = true
            state.isPasswordLoading = false
            state.passwordError = action.payload?.message
        })

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

        builder.addCase(logout.fulfilled, (state, action) => {
            state.isAuth = false
            state.user = undefined
        })
    }
})

export const {resetEditState, resetPasswordState} = userSlice.actions

export default userSlice.reducer