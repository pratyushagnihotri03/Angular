import { Component, OnInit } from '@angular/core';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  constructor(protected alertService: AlertService) { }

  ngOnInit(): void {
  }

  success() {
    this.alertService.success('Success !', this.options);
  }

  error() {
    this.alertService.error('Error !', this.options);
  }

  warn() {
    this.alertService.warn('Warning !', this.options);
  }

  info() {
    this.alertService.info('Information !', this.options);
  }

  clear() {
    this.alertService.clear();
  }

}
