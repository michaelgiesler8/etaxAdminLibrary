import { Injectable } from '@angular/core';

interface Demo {
  id: number;
  title: string;
  description: string;
  navatticUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private demos: Demo[] = [
    { id: 1, title: 'Demo 1', description: 'Description for Demo 1', navatticUrl: 'https://navattic.com/demo1' },
    // Add more demos here
    { id: 20, title: 'Demo 20', description: 'Description for Demo 20', navatticUrl: 'https://navattic.com/demo20' },
  ];

  getDemos(): Demo[] {
    return this.demos;
  }
}
