import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-preview',
  standalone: true,
  imports: [],
  templateUrl: './user-preview.component.html',
  styleUrl: './user-preview.component.scss'
})
export class UserPreviewComponent {
@Input() owner: any | null = null;

 displayUser() {
  const userClone= JSON.parse( JSON.stringify(this.owner))
  window.parent.postMessage({ type: 'display_user', payload: userClone },environment.MAIN_CONTAINER_URL);
}
}
