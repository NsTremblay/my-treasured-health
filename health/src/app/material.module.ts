import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MatCardModule],
  exports: [MdButtonModule, MdCheckboxModule, MatCardModule]
})
export class MaterialModule { }
