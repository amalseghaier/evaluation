import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
 
  sendNotificationToClassStudents(className: string, examTitle: string) {
    // Ici, vous enverriez une notification aux étudiants de la classe spécifiée
    // Vous pouvez utiliser des services tiers pour envoyer des notifications en temps réel ou par e-mail
    console.log(`Notification envoyée aux étudiants de la classe ${className}: Nouvel examen "${examTitle}" disponible.`);
  }
}

