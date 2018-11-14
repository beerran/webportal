import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChartService {
    private reflowWatcher$ = new BehaviorSubject(false);

    constructor() { }

    public sendReflow() {
        this.reflowWatcher$.next(true);
    }

    public listen() {
        return this.reflowWatcher$;
    }
}
