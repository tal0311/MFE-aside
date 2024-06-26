import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { NgIf } from '@angular/common';
import { postService } from './services/post.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostDetailsComponent, WeatherComponent, NgIf, AddCommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'aside-fe';

  postForDisplay_ = signal<any>(null);
  loggedUser_ = signal<any>(null);
  weather_ = signal<any>(null);

  ngOnInit(): void {
    // this.getPostFromLocalStorage();
    window.addEventListener('message', (e) => {
      if (e.data.type === 'display_post') {
        console.log(e.data);
       
        console.log('post details', e.data);
        
        // this.setPostForDisplay(e.data.payload);
        // this.setUser(e.data.payload.user);

      }

      if (e.data.type === 'display_weather') {
        this.setWeather(e.data.payload);
      }
    });

  }

  setWeather(weather: any) {
    this.weather_.set(weather);
    postService.saveToLocalStorage('current-weather', this.weather_());
  }
  setPostForDisplay(post: any) {
    this.postForDisplay_.set(post);
    postService.saveToLocalStorage('current-post', this.postForDisplay_());
  }
  setUser(user: any) {
    this.loggedUser_.set(user);
    postService.saveToLocalStorage('logged-user', this.loggedUser_());
  }

  getPostFromLocalStorage() {
    const post = postService.getFromLocalStorage('current-post');
    if (post) {
      this.postForDisplay_.set(post);
    }
  }

  updatePost(comment: any) {
    this.postForDisplay_.update((post) => post.comments.push(comment));
    postService.saveToLocalStorage('current-post', this.postForDisplay_());
    // this.updateParentPost(this.postForDisplay_());
  }

  updateParentPost(post: any) {
    window.parent.postMessage({ type: 'update-post', payload: post }, '*');
  }

  resetPost() {
    this.postForDisplay_.set(null);
    postService.saveToLocalStorage('current-post', this.postForDisplay_());
  }

  addComment(comment:any){
    console.log(comment);
    // this.updatePost(comment)
    

  }
}

// postForDisplay: any =
// {
//   postId: "2",
//   owner: {
//     userId: "user1",
//     username: "john_doe",
//     imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/75.jpg"
//   },
//   likedBy: [
//     "user2",
//     "user3"
//   ],
//   comments: [
//     {
//       commentId: "1",
//       owner: {
//         userId: "user2",
//         username: "jane_doe",
//         imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
//       },
//       text: "comment1",
//       createdAt: 1640995200000
//     },
//     {
//       commentId: "2",
//       owner: {
//         userId: "user3",
//         username: "joe_doe",
//         imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/56.jpg"
//       },
//       text: "comment2",
//       createdAt: 1640995200000
//     }
//   ],
//   updatedAt: 1640995200000,
//   createdAt: 1640995200000,
//   txt: "This is a sample post"
// };

// window.addEventListener("message", (e) => {
//   console.log("e");

//   this.postForDisplay = e.data.payload;
// });
