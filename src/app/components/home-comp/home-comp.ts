import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-comp',
  standalone: false,
  templateUrl: './home-comp.html',
  styleUrl: './home-comp.css'
})
export class HomeComp implements OnInit, OnDestroy{
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private intervalId: any;
  startDate = new Date('2023-01-02T00:00:00');

  ngOnInit() {
    this.startCountUp();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCountUp() {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const elapsed = now - this.startDate.getTime();

      this.days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((elapsed / (1000 * 60)) % 60);
      this.seconds = Math.floor((elapsed / 1000) % 60);
    }, 1000);
  }

}
