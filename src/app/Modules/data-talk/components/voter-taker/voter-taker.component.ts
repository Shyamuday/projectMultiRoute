import { Component } from '@angular/core';

@Component({
  selector: 'app-voter-taker',
  templateUrl: './voter-taker.component.html',
  styleUrls: ['./voter-taker.component.css'],
})
export class VoterTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
