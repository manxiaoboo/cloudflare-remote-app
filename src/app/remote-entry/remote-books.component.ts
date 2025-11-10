import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-cloudflare-remote-books',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 24px">
      <h2>Cloudflare - Remote Books</h2>
      <p>这是一段来自 <strong>remote</strong> 的远程组件。</p>
      <div class="book-list">
        @for (book of (books | async); track $index) {
        <div class="book-item">
            <div>{{ book.name }}</div>
            <div>{{ book.description }}</div>
            <div>{{ book.price }}{{ book.currency }}
            @if (book.discount !== 1) {
              <small style="text-decoration: line-through;">{{book.originPrice}}{{ book.currency }}</small>
            }
            </div>
        </div>
        }
      </div>
    </section>
  `,
  styles: `
    .book-list {
            width: 100%;
            .book-item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid grey;
                div {
                    padding: 6px;
                }
            }
        }
  `
})
export class RemoteBooksComponent {

  protected http = inject(HttpClient);

  public books = this.http.get('https://bbf.anna091438.workers.dev/proxy-http/books').pipe(map((data: any) => data.payload));

}