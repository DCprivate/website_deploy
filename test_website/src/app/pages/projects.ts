import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Bot',
      description: 'A Python bot that mimics human gameplay in OSRS.',
      link: 'https://github.com/yourusername/osrs-bot'
    },
    {
      title: 'Physics Engine',
      description: 'Rust-based simulator for cosmic and quantum interactions.',
      link: 'https://github.com/yourusername/physics-engine'
    }
  ];
}