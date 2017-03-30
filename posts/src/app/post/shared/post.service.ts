import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from './post.model';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostService {

  constructor(private http: Http) {}

  findAll(): Observable<Post[]> {
    return this.http.get(`${API}/posts`)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  findCommentsByPostId(id: string): Observable<Comment[]> {
    return this.http.get(`${API}/comments/${id}`)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse<T>(res: Response): T {
    // Handle error
    if (!res.ok) {

    }
    const body = res.json();
    return body || [];
  }

  private handleError(error: Response | any): Observable<any> {
    // Handle error response
    let errMsg: string;
    if (error instanceof Response) {
      const body: any = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
