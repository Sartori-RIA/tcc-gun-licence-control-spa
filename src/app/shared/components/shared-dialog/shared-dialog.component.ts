import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedDialogComponent implements OnInit {

  classTitle: string;

  constructor(public dialogRef: MatDialogRef<SharedDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    if (this.data.title == 'Sucesso')
      this.classTitle = "success-bg";
    if (this.data.title == "Erro")
      this.classTitle = "erro-bg";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
