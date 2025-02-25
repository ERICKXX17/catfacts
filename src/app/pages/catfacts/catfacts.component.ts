import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/catfacts.service';

@Component({
  selector: 'app-catfacts',
  templateUrl: './catfacts.component.html',
  styleUrl: './catfacts.component.css'
})
export class CatfactsComponent implements OnInit {

  data: string = ''; // Ahora almacena un solo string en lugar de un array

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.getFact();
  }

  getFact(): void {
    this.catsService.getPosts().subscribe((response) => {
      this.data = response.fact; // Solo obtenemos el dato de "fact"
    });
  }
}
