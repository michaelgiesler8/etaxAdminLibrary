import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo-library',
  templateUrl: './demo-library.component.html',
  styleUrls: ['./demo-library.component.css']
})
export class DemoLibraryComponent implements OnInit {
  demos = [];
  selectedDemo: any;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demos = this.demoService.getDemos();
  }

  openDemo(demo: any): void {
    this.selectedDemo = demo;
    $('#demoModal').modal('show');
  }
}
