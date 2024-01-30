import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { JsonPipe, DatePipe, NgFor, NgIf, CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { environment } from '../../../environments/environment';
import { UserPreviewComponent } from '../user-preview/user-preview.component';
import { CommentListComponent } from '../comment-list/comment-list.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [JsonPipe, DatePipe, NgFor, NgIf, IconComponent,UserPreviewComponent, CommonModule,CommentListComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  @Input() post: any | null = null;
  @Output() closePost = new EventEmitter<any>();

  resetPost() {
    console.log('resetPost');
    this.closePost.emit(null);
  }
  sendUserForDisplay(comment: any) {
    console.log(environment.MAIN_CONTAINER_URL);
    
    window.parent.postMessage(
      { type: 'display_user', payload: comment.owner },
      environment.MAIN_CONTAINER_URL
    );
  }
}
