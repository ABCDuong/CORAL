import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountSettingsComponent } from '@modules/pages/account-settings/account-settings.component';
import { GraphViewComponent } from '@modules/pages/graph-view/graph-view.component';
import { EntryListViewComponent } from '@modules/pages/entry-list-view/entry-list-view.component';
import { ModifyEntryComponent } from '@modules/pages/modify-entry/modify-entry.component';

const routes: Routes = [
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'entry-list-view', component: EntryListViewComponent },
  { path: 'graph-view', component: GraphViewComponent },
  { path: 'modify-entry/:id', component: ModifyEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
