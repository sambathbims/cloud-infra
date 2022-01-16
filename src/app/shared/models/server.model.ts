export interface Server {
    model: string;
    ram: {
        memory: string,
        unit: string,
        type: string
    };
    hdd: {
        memory: string,
        count: string,
        unit: string,
        type: string
    };
    location: string;
    price: {
        currency: string,
        currencySymbol: string,
        amountCents: string
    };
}

export interface ServerResponse {
    servers: Array<Server>;
}
