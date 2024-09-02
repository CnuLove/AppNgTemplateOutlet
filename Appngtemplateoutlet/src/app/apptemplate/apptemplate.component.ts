import { Component, inject, Input, TemplateRef } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-apptemplate',
  templateUrl: './apptemplate.component.html',
  styleUrl: './apptemplate.component.css'
})
export class ApptemplateComponent {
@Input() headerTemplate:TemplateRef<any> | undefined
Status=inject(CustomService);
}
