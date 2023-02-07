import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTalkRoutingModule } from './data-talk-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { DataTalkComponent } from './components/data-talk/data-talk.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoterTakerComponent } from './components/voter-taker/voter-taker.component';
import { CountDownParentComponent } from './components/count-down-parent/count-down-parent.component';
import { CountDownChildComponent } from './components/count-down-child/count-down-child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    DataTalkComponent,
    VoterComponent,
    VoterTakerComponent,
    CountDownParentComponent,
    CountDownChildComponent
  ],
  imports: [
    CommonModule,
    DataTalkRoutingModule
  ]
})
export class DataTalkModule { }
