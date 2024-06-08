import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/Photo'; 

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  query: string = '';
  searchResults: Photo[] = []; 
  photos: Photo[] = [];
  showDescription: boolean = false;

  

  constructor(
    private router: Router,
    private photoService: PhotoService
  ) {}

  selectedCard(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/photosview', id]);
    }
  }

  searchPhotos(): void {
    if (this.query.trim() !== '') {
      this.photoService.searchPhotos(this.query).subscribe(
        (results) => {
          this.searchResults = results; 
        },
        (error) => console.error('Error al buscar fotos:', error)
      );
    }
  }
}
