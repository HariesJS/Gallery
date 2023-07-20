import { configureStore } from '@reduxjs/toolkit'
import { galleryReducer } from '../reducers/galleryReducer'

const store = configureStore({
	reducer: {
		galleryAPI: galleryReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
