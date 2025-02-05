import { NgModule } from '@angular/core';
import { BisqRoutingModule } from './bisq.routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxBootstrapMultiselectModule } from 'ngx-bootrap-multiselect';

import { LightweightChartsComponent } from './lightweight-charts/lightweight-charts.component';
import { LightweightChartsAreaComponent } from './lightweight-charts-area/lightweight-charts-area.component';
import { BisqMarketComponent } from './bisq-market/bisq-market.component';
import { BisqTransactionsComponent } from './bisq-transactions/bisq-transactions.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BisqTransactionComponent } from './bisq-transaction/bisq-transaction.component';
import { BisqBlockComponent } from './bisq-block/bisq-block.component';
import { BisqDashboardComponent } from './bisq-dashboard/bisq-dashboard.component';
import { BisqIconComponent } from './bisq-icon/bisq-icon.component';
import { BisqTransactionDetailsComponent } from './bisq-transaction-details/bisq-transaction-details.component';
import { BisqTransfersComponent } from './bisq-transfers/bisq-transfers.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLeaf, faQuestion, faExclamationTriangle, faRocket, faRetweet, faFileAlt, faMoneyBill,
  faEye, faEyeSlash, faLock, faLockOpen, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { BisqBlocksComponent } from './bisq-blocks/bisq-blocks.component';
import { BisqApiService } from './bisq-api.service';
import { BisqAddressComponent } from './bisq-address/bisq-address.component';
import { BisqStatsComponent } from './bisq-stats/bisq-stats.component';
import { BsqAmountComponent } from './bsq-amount/bsq-amount.component';
import { BisqTradesComponent } from './bisq-trades/bisq-trades.component';

@NgModule({
  declarations: [
    BisqTransactionsComponent,
    BisqTransactionComponent,
    BisqBlockComponent,
    BisqTransactionComponent,
    BisqIconComponent,
    BisqTransactionDetailsComponent,
    BisqTransfersComponent,
    BisqBlocksComponent,
    BisqAddressComponent,
    BisqStatsComponent,
    BsqAmountComponent,
    LightweightChartsComponent,
    LightweightChartsAreaComponent,
    BisqDashboardComponent,
    BisqMarketComponent,
    BisqTradesComponent,
  ],
  imports: [
    BisqRoutingModule,
    SharedModule,
    NgbPaginationModule,
    FontAwesomeModule,
    NgxBootstrapMultiselectModule,
  ],
  providers: [
    BisqApiService,
  ]
})
export class BisqModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faQuestion);
    library.addIcons(faExclamationCircle);
    library.addIcons(faExclamationTriangle);
    library.addIcons(faRocket);
    library.addIcons(faRetweet);
    library.addIcons(faLeaf);
    library.addIcons(faFileAlt);
    library.addIcons(faMoneyBill);
    library.addIcons(faEye);
    library.addIcons(faEyeSlash);
    library.addIcons(faLock);
    library.addIcons(faLockOpen);
  }
}
