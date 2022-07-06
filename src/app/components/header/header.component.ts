import { Component, OnInit } from '@angular/core'; 
import { DataServiceService } from 'src/app/services/data-service.service';

// Decorator (Component)
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

//Clase (HeaderComponent), aquí se definen propiedades y métodos
export class HeaderComponent implements OnInit {

  title: string = "Hernán Hael";
  myPortfolio: any;

  constructor(private PortFolioData:DataServiceService) { }

  ngOnInit(): void {
    this.PortFolioData.obteinData().subscribe(data => { 
      this.myPortfolio=data;
    });
  }

}
