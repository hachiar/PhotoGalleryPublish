import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(
    public _http: Http
  ) {}

  /**
   * Makes a get request to the given url.
   * @param {string}         url     The url to make a get request to
   * @param {RequestOptions} options The RequestOptions object for the call.
   */
  get(url: string, options: RequestOptions): Observable<Response> {
    return this._http.get(url, options);
  }

  /**
   * Makes a post request to the given url.
   * @param {string}  url  The url to make a post request to
   * @param {string}  body The body of the post request
   * @param {boolean} sign Should the request be signed?
   */
  post(url: string, body: string, sign: boolean): Observable<Response> {

    const headerOptions:  { [key: string]: string } = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const headers: Headers = new Headers(headerOptions);
    const options: RequestOptions = new RequestOptions({ headers: headers });

    return this._http.post(url, body, options);
  }

  /**
   * Makes a put request to the given url.
   * @param {string}       url        The url to make a put request to
   * @param {string}       body       The body of the put request
   * @returns {Observable<Response>}  Response from put request
   */
  put(url: string, body: string) {
    return this._http.put(url, body);
  }

  /**
   * Makes delete request to given url
   * @param {string}        url     The url to make a delete request to
   * @param {string}        options The RequestOptions object for the call
   * @returns {Observable<Response>}  Response from delete request
   */
  delete(url: string): Observable<Response> {
    return this._http.delete(this._buildApiUrl(url), options);
  }

}
