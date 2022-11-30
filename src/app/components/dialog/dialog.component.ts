import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public options: string[] = ['Medical Aid', 'Shelter', 'Food', 'Drink', 'Police'];

  form: FormGroup;
  title: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.title = data.title;  

    this.form = this.fb.group({
      category: this.fb.control('', Validators.required),
      desc: this.fb.control('')
    });
  }

  ngOnInit(): void {
    
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

}
