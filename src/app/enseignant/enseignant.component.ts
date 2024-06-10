import { Component } from '@angular/core';
import { AuthuserService } from '../service/authuser.service';

// Define a simple type inline for User
type User = any; // You can use 'any' as a placeholder for now


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
 

  user: User | undefined;

  constructor(private authService: AuthuserService) { }

  ngOnInit(): void {
    this.getUserDetails(1); // Replace '1' with the actual user ID you want to retrieve
  }

  getUserDetails(userId: number): void {
    this.authService.getUserById(userId).subscribe(
      (data: any) => {
        this.user = data;
      },
      (error) => {
        console.error('Error retrieving user:', error);
      }
    );
  }
}
