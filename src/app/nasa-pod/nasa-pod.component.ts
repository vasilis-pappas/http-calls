import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../services/nasa.service';
import { NasaData } from '../models/nasa-data';

@Component({
  selector: 'app-nasa-pod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa-pod.component.html',
  styleUrl: './nasa-pod.component.css'
})
export class NasaPodComponent {

  // data: NasaData = {} as NasaData;
  data!: NasaData;
  loading: boolean = false
  errorMessage: string = ''

  nasaService = inject(NasaService)

  makeRequest(): void {
    this.loading = true
    this.nasaService.get().subscribe({
      next: (data: NasaData) => {
        this.data = data;
        this.loading = false;
      },
      error: err => this.errorMessage = err
    })
  }

}
