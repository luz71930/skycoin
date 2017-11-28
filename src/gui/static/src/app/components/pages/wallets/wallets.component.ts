import { Component } from '@angular/core';
import { WalletService } from '../../../services/wallet.service';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { WalletModel } from '../../../models/wallet.model';
import { ChangeNameComponent } from './change-name/change-name.component';
import { Wallet } from '../../../app.datatypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent {

  constructor(
    public walletService: WalletService,
    private dialog: MdDialog,
    private router: Router,
  ) {}

  addWallet() {
    const config = new MdDialogConfig();
    config.width = '500px';
    this.dialog.open(CreateWalletComponent, config).afterClosed().subscribe(result => {
      //
    });
  }

  loadWallet() {
    // to be implemented
  }

  openWallet(wallet: Wallet) {
    this.router.navigate(['/wallet', wallet.filename]);
  }
}
