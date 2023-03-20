import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { swapAnimation } from '../animation/animation';
import { Algorithm } from './Algorithm';
import { swap } from './Swap';

@Injectable({
    providedIn: 'root'
})

export class BubbleSort extends Algorithm {
    override algorithm = async (speed: number, array: number[]) => {
        // let n = array.length;
        // for (var i = 0; i < n - 1; i++) {
        //     console.log('object')
        //     for (var j = 0; j < n - i - 1; j++) {
        //         if (array[j] > array[j + 1]) {
        //             swapAnimation(j, j + 1, true)
        //             await timer(speed).pipe(take(1)).toPromise();
        //             swapAnimation(j, j + 1, false)
        //             swap(array, j, j + 1)
        //             await timer(10).pipe(take(1)).toPromise();
        //         }
        //         this.countService.addIteration()
        //     }
        // }
        let k = 0
        let ok = false
        let n = array.length
        while (!ok) {
            ok = true
            for (let i = 0; i < n - 1 - k; i++) {
                if (array[i] > array[i + 1]) {
                    swapAnimation(i, i + 1, true)
                    await timer(speed).pipe(take(1)).toPromise();
                    swapAnimation(i, i + 1, false)
                    swap(array, i, i + 1)
                    await timer(10).pipe(take(1)).toPromise();
                    ok = false
                }
                this.countService.addIteration()
            }
            k++
        }
    }
}
