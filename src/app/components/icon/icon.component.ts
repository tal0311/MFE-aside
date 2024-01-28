

import { Component, Input } from '@angular/core';
declare var svgService: any;
// ts-ignore



@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
 @Input() iconName: string;


 getIconUrl() {
   return svgService.getSvg(this.iconName);
 }
 

}
