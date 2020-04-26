import { AxiosInstance, AxiosResponse } from 'axios';


export class PlantsService {

    http!: AxiosInstance;

    path: string = '/api/v1/';

    constructor(http: AxiosInstance) {
        this.http = http
    }

    getAllPlants(): Promise<AxiosResponse<any[]>> {
        return this.http.get(this.path + 'plants/');
    }

    getPlants(startDate: string, endDate: string): Promise<AxiosResponse<any[]>> {
        return this.http.get(`${this.path}plants/?from_time=${startDate}&to_time=${endDate}`);
    }

    getTotalAll(): Promise<AxiosResponse<any[]>> {
        return this.http.get(this.path + 'plants/average');
    }

    getTotal(startDate: string, endDate: string): Promise<AxiosResponse<any>> {
        return this.http.get(`${this.path}plants/average?from_time=${startDate}&to_time=${endDate}`);
    }

    getGroups(planId: number, date: string): Promise<AxiosResponse<any>> {
        return this.http.get(`${this.path}plants/${planId}/group?time=${date}`);
    }

}