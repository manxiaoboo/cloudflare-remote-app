import { Component } from '@angular/core';

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
export class RemoteBooksComponent {}