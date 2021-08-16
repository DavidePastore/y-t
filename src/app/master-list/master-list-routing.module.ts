import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MasterListPage } from './master-list.page';

const routes: Routes = [
  {
    path: '',
    component: MasterListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class MasterListPageRoutingModule {}
