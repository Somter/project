import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
