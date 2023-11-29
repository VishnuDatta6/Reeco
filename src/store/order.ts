import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditPayload, Orders, OrderState, UpdateStatus } from "../interfaces/interfaces";
import { AppDispatch } from ".";

const initialState: OrderState = {
  orders : {
    order: '',
    supplier : '',
    shippingdate : '',
    total : 0,
    category : '',
    department : '',
    status : '',
    items : []
  },
}

const onFetching = (state: OrderState, action: PayloadAction<Orders>) => {
    state.orders = action.payload
}

const updateStatus = (state: OrderState, action : PayloadAction<UpdateStatus>) => {
    state.orders.items[action.payload.index].status = action.payload.status 
}

const editDetails = (state: OrderState, action: PayloadAction<EditPayload>)=>{
    const {index, price, quantity, total, status } = action.payload
    state.orders.items[index] = {
        ...state.orders.items[index], price : price, quantity : quantity, total : total, status: status
    }
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers : {
        onFetching,
        updateStatus,
        editDetails
    }
});

export const fetchOrders = ()=>(dispatch: AppDispatch)=>{
    const data = require('../assests/data.json');
    dispatch(
        orderSlice.actions.onFetching(data)
    )
};

export const updateProductStatus=(body : UpdateStatus)=>(dispatch: AppDispatch)=>{
    dispatch(orderSlice.actions.updateStatus(body))
}

export const editProductDetails=(body: EditPayload)=>(dispatch: AppDispatch)=>{
    dispatch(orderSlice.actions.editDetails(body))
}

export default orderSlice.reducer;