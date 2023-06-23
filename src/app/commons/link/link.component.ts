import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss'],
	standalone:  true,
	imports: [CommonModule]
})



export class LinkComponent {

    
	constructor() { }


	vinculos: any = [
		{
			nombre: 'tele 13',
			imagen: '',
			link: ''
		},
		{
			nombre: 'deportes 13',
			imagen: '',
			link: ''
		},
		{
			nombre: 'rec 13',
			imagen: '',
			link: ''
		},
		{
			nombre: 'horizonte 13',
			imagen: '',
			link: ''
		},
		{
			nombre: 'radio 13',
			imagen: '',
			link: ''
		}
	];


}
