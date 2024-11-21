import { createAsyncThunk } from "@reduxjs/toolkit";
import ServicesBike from "../services/ServicesBike";

export const fetchAllBikes = createAsyncThunk(
    'bikes/fetchBikes',
    async() => {
        const data = ServicesBike.getInfo();
        return data;
    }
);