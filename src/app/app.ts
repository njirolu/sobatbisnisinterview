import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFormComponent } from "./my-form-component/my-form-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sobatbisnisinterview');
}
