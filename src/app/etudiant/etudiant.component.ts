import { Component } from '@angular/core';
import { AuthuserService } from '../service/authuser.service';
// Define a simple type inline for User
type User = any; // You can use 'any' as a placeholder for now

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
 
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
 
