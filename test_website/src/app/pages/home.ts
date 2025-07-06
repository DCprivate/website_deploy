import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from '../components/chatbox';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChatboxComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}