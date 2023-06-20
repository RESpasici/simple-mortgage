import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-broker-info',
  templateUrl: './broker-info.component.html',
  styleUrls: ['./broker-info.component.sass']
})
export class BrokerInfoComponent {
  get brokerName() {
    return environment.userName;
  }

  get brokerDescription() {
    return environment.description;
  }

  get backgroundImage() {
    return `url(/assets/${environment.envName}-background.jpeg)`;
  }

  get logoImage() {
    return 'assets/' + environment.envName + '-logo.png';
  }
}
