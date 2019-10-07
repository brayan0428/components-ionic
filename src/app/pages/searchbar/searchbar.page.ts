import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  
  albums:any[];
  textoBuscar:string = '';
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albumes) => {
      this.albums = albumes
      console.log(this.albums);
    })
  }

  buscar(event){
    this.textoBuscar = event.detail.value
  }
}
