import { AxiosInstance, AxiosResponse } from 'axios';


export class PlantsService {

    http!: AxiosInstance;

    path: string = '/api/v1/';

    constructor(http: AxiosInstance) {
        this.http = http
    }

    getPlants(): Promise<AxiosResponse<any[]>> {
        return this.http.get(this.path + 'plants/');
    }


}