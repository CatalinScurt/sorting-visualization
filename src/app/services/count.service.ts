import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  static addIteration() {
    throw new Error('Method not implemented.');
  }
  count: number = 0
  constructor() { }

  addIteration = () => {
    return this.count += 1
  }

  getCount = () => {
    return this.count
  }
}
