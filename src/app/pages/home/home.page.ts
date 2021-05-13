import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

import { CoreService } from 'src/app/services/core.service';
import { ScannerService } from 'src/app/services/scanner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public authTokenField = 'f821883f';
  public authTokenValid = true;

  constructor(
    private scanner: ScannerService,
    public core: CoreService,
    private nav: NavController
  ) {}

  goScan() {
    this.nav.navigateRoot('scan');
  }
}
