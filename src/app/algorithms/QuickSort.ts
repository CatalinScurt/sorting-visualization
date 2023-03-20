import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { swapAnimation } from '../animation/animation';
import { swap } from './Swap';
import { Injectable } from '@angular/core';
import { Algorithm } from './Algorithm';

@Injectable({
    providedIn: 'root'
})
export class QuickSort extends Algorithm {
    override algorithm = async (speed: number, array: number[], low: number, high: number) => {
        if (low < high) {
            let pi = this.partition(speed, array, low, high)
            await this.algorithm(speed, array, low, await pi - 1)
            await this.algorithm(speed, array, await pi + 1, high)
        }
    }

    partition = async (speed: number, array: number[], low: number, high: number) => {
        let pivot = array[high]
        let i = low - 1

        for (let j = low; j <= high - 1; j++) {
            this.countService.addIteration()
            if (array[j] < pivot) {
                i++
                await this.localSwap(speed, array, i, j)
            }
        }
        await this.localSwap(speed, array, i + 1, high)
        return i + 1
    }

    localSwap = async (speed: number, array: number[], i: number, j: number) => {
        swapAnimation(i, j, true)
        i !== j && await timer(speed).pipe(take(1)).toPromise();
        swap(array, i, j)
        swapAnimation(i, j, false)
        i !== j && await timer(10).pipe(take(1)).toPromise();
    }
}