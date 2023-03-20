import { Component, OnInit, Input } from '@angular/core';
import { BubbleSort } from 'src/app/algorithms/BubbleSort';
import { HeapSort } from 'src/app/algorithms/HeapSort';
import { InsertionSort } from 'src/app/algorithms/InsertionSort';
import { QuickSort } from 'src/app/algorithms/QuickSort';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  array: number[] = []

  arrLength: number = 0

  speed: number = 500

  error: boolean = false
  maxArrayLength = window.innerWidth / 27

  constructor(
    public countService: CountService,
    private BubbleSort: BubbleSort,
    private InsertionSort: InsertionSort,
    private QuickSort: QuickSort,
    private HeapSort: HeapSort) { }

  ngOnInit(): void {
    console.log(this.array)
    this.array = [30, 80, 62, 7, 92, 34, 26, 11, 96]
  }

  setMyStyles = (index: number) => {
    let styles = {
      'height': this.array[index] + 'px',
    };
    return styles;
  }

  updateData = ({ inputsValue, arrayType }: any) => {
    this.arrLength = 0
    if (inputsValue.speed) this.speed = Number(inputsValue.speed)
    if (Number(inputsValue.arrayLength) > this.maxArrayLength) {
      this.error = true
    } else {
      this.getArray(arrayType, inputsValue.arrayLength)
    }
  }

  getArray = (arrayType: string, arrayLength: number) => {
    this.array = []
    for (let index = 0; index < Number(arrayLength); index++) {
      this.array.push(this.getRandomInt(200))
    }
    switch (arrayType) {
      case 'Random':
        break;
      case 'Ascending':
        this.array.sort((first: number, second: number) => first - second)
        break;
      case 'Descending':
        this.array.sort((first: number, second: number) => second - first)
        break;
      default:
        break;
    }
  }

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  bubbleSort = async () => {
    this.countService.count = 0
    await this.BubbleSort.algorithm(this.speed, this.array)
    this.finishAnimation()
  }

  insertionSort = async () => {
    this.countService.count = 0
    await this.InsertionSort.algorithm(this.speed, this.array)
    this.finishAnimation()
  }

  quickSort = async () => {
    this.countService.count = 0
    await this.QuickSort.algorithm(this.speed, this.array, 0, this.array.length - 1)
    this.finishAnimation()
  }

  heapSort = async () => {
    this.countService.count = 0
    await this.HeapSort.algorithm(this.speed, this.array)
    this.finishAnimation()
  }

  finishAnimation = () => {
    for (let i = 0; i < this.array.length; i++) {
      setTimeout(() => {
        (document.querySelectorAll('.data')[i] as HTMLElement).classList.add('finished')
      }, 50 * i);
    }
  }
}
