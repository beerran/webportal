import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PanelDataService {
    constructor(private http: HttpClient) { }
    public getData(endpoint: string) {
        return this.http.get<any[]>(endpoint);
    }
}
