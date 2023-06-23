// Angular
import { Component   } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// Components
import { LinkComponent 	   } from '../commons/link/link.component';
import { SearcherComponent } from '../commons/searcher/searcher.component';
import { SliderComponent   } from '../commons/slider/slider.component';
import { MenuComponent     } from '../commons/menu/menu.component';



@Component({
	selector:    'app-home',
	templateUrl: 'home.page.html',
	styleUrls:   ['home.page.scss'],
	standalone:  true,
	imports:     [IonicModule, LinkComponent, SearcherComponent, SliderComponent, MenuComponent]
})



export class HomePage {

	constructor() {}

}

