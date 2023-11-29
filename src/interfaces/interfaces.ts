export interface Items {
    img : string;
    productname : string;
    brand : string;
    price : number;
    quantity : number;
    total : number;
    status : string;
}

export interface Orders {
    order : string;
    supplier : string;
    shippingdate: string;
    total : number;
    category : string;
    department : string;
    status : string;
    items : Items[]
}

export interface OrderState {
    orders: Orders
}

export interface UpdateStatus {
    index: number;
    status : string;
}

export interface EditPayload {
    index: number;
    price: number;
    quantity: number;
    total: number;
    status: string
}