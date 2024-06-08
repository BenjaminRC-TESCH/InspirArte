import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/Photo';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent implements OnInit {
  photos: Photo[] = [];
  showDescription: boolean = false;
  constructor(
    private photoService: PhotoService,
    private router: Router, 
    private authService: AuthService
  ) { }

ngOnInit() {
  const userId = this.authService.getUserId();
  if (userId) {
    this.photoService.getUserPhotos(userId)
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      );
  }
}


  selectedCard(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/photos', id]);
    }
  }

}