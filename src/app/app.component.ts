import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showNo = false;
  title = 'baccha';
  countDown = 10;

  displayNo() {
    this.showNo = true;
  }

  countDownChanged() {
    setInterval(() => {
      this.countDown > 0 ? this.countDown = this.countDown - 1 : this.countDown = 0;
      if (this.countDown === 0) {
        window.close();
        window.alert('Window has been destroyed!')
        console.log('trug')
      }
    }, 1000);
  }

  clickYes() {
    window.open('https://www.youtube.com/watch?v=aAkMkVFwAoo', '_blank');
  }
}
