import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { swapAnimation } from '../animation/animation';
import { swap } from './Swap';
import { Injectable } from '@angular/core';
import { Algorithm } from './Algorithm';

@Injectable({
    providedIn: 'root'
})
export class HeapSort extends Algorithm {
    override algorithm = async (speed: number, array: number[]) => {
        let n = array.length
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await this.heapify(speed, array, n, i)
            this.countService.addIteration()
        }
        for (let i = n - 1; i > 0; i--) {
            await this.localSwap(speed, array, 0, i)
            await this.heapify(speed, array, i, 0)
            this.countService.addIteration()
        }
    }

    heapify = async (speed: number, array: number[], n: number, i: number) => {
        this.countService.addIteration()

        let largest = i
        let l = 2 * i + 1
        let r = 2 * i + 2

        if (l < n && array[l] > array[largest]) largest = l
        if (r < n && array[r] > array[largest]) largest = r
        if (largest !== i) {
            await this.localSwap(speed, array, i, largest)
            await this.heapify(speed, array, n, largest)
        }
    }

    localSwap = async (speed: number, array: number[], i: number, j: number) => {
        swapAnimation(i, j, true)
        i !== j && await timer(speed).pipe(take(1)).toPromise();
        // await timer(speed).pipe(take(1)).toPromise();
        console.log("object")
        swap(array, i, j)
        swapAnimation(i, j, false)
        i !== j && await timer(10).pipe(take(1)).toPromise();
    }
}