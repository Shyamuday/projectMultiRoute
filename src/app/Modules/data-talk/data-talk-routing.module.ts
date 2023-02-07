import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownParentComponent } from './components/count-down-parent/count-down-parent.component';
import { DataTalkComponent } from './components/data-talk/data-talk.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { ParentComponent } from './components/parent/parent.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoterTakerComponent } from './components/voter-taker/voter-taker.component';

const routes: Routes = [
  { path: '', component: DataTalkComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'nameParent', component: NameParentComponent },
  { path: 'versionParent', component: VersionParentComponent },
  { path: 'voteTaker', component: VoterTakerComponent },
  { path: 'countDownParent', component: CountDownParentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTalkRoutingModule {}
