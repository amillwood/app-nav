import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports:[
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})

export class AngularMaterialModule {}
