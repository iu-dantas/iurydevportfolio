import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeadlineComponent } from '../headline/headline.component';
import { SobreComponent } from '../sobre/sobre.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeadlineComponent, SobreComponent, HabilidadesComponent, ServicosComponent, PortfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
