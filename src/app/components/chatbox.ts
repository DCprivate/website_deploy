import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbox.html',
  styleUrls: ['./chatbox.css']
})
export class ChatboxComponent {
  messages: string[] = [];
  input: string = '';

  send() {
    if (this.input.trim()) {
      this.messages.push(this.input.trim());
      this.input = '';
    }
  }
}