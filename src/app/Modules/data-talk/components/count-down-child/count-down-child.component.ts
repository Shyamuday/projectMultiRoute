import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-count-down-child',
  templateUrl: './count-down-child.component.html',
  styleUrls: ['./count-down-child.component.css'],
})
export class CountDownChildComponent implements OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
