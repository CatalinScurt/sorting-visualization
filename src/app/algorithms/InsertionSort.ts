import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { swapAnimation } from '../animation/animation';
import { Algorithm } from './Algorithm';
import { Injectable } from '@angular/core';
import { swap } from './Swap';

@Injectable({
    providedIn: 'root'
})
export class InsertionSort extends Algorithm {
    override algorithm = async (speed: number, array: number[]) => {
        let n = array.length
        for (let i = 0; i < n; i++) {
            let temp = array[i]
            let j = i

            while (j > 0 && temp < array[j - 1]) {
                swapAnimation(j - 1, j, true)
                await timer(speed).pipe(take(1)).toPromise();
                swapAnimation(j - 1, j, false)
                swap(array, j - 1, j)
                await timer(10).pipe(take(1)).toPromise();
                j -= 1
                this.countService.addIteration()
            }
            array[j] = temp
        }
    }
}