import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cloudflare-remote-books',
  standalone: true,
  template: `
    <section style="padding: 24px">
      <h2>cloudflare - Remote Books</h2>
      <p>这是一段来自 <strong>remote</strong> 的远程组件。</p>
    </section>
  `
})
export class RemoteBooksComponent {
  private http = inject(HttpClient);

  constructor() {
    this.http.get('https://bbf.anna091438.workers.dev/proxy-http/books').subscribe(data => {
      console.info(data);
    });
  }
}