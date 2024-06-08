import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/Photo';


@Component({
  selector: 'app-full-screen-photo',
  templateUrl: './full-screen-photo.component.html',
  styleUrls: ['./full-screen-photo.component.css']
})
export class FullScreenPhotoComponent implements OnInit {
  id: string | undefined;
  photo: Photo | undefined;
  newPhotoSelected: string | ArrayBuffer | null = null;
  newFile: File | null = null;
  isZoomed: boolean = false;
  isFullScreen: boolean = false;
  

  @ViewChild('newPhotoInput') newPhotoInput!: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  toggleZoom(): void {
    this.isZoomed = !this.isZoomed;
  }
  toggleFullScreen(): void {
    this.isFullScreen = !this.isFullScreen;
  }



  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.photoService.getPhoto(this.id)
          .subscribe(
            res => {
              this.photo = res;
              this.cdr.detectChanges();
            },
            err => console.error(err)
          );
      }
    });
  }

  

  onPhotoSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.newFile = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = e => this.newPhotoSelected = reader.result as string;
      reader.readAsDataURL(this.newFile);
    }
  }

  downloadImage(): void {
    fetch(`http://localhost:4000/${this.photo?.imagePath}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.photo?.title || 'download';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(e => console.error(e));
  }
}
