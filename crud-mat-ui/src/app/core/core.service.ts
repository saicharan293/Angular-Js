import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private snackService:MatSnackBar) { }
  openSnackBar(message:string,action:string='ok') {
    this.snackService.open(message,action, {
      duration: 5 * 1000,
      verticalPosition:'top'
    });
  }
}
