import { Injectable } from "@angular/core";
import { CountService } from "../services/count.service";

@Injectable({
    providedIn: 'root'
})

export class Algorithm {
    constructor(public countService: CountService) { }
    algorithm = (speed: number, array: number[], low: number, high: number) => { }
}