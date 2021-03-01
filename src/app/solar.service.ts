import { Injectable } from "@angular/core";
import { Solar } from "./solar";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class SolarService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private solaresUrl ="http://localhost:3000/solares";
  //private solaresUrl = 'mongodb+srv://usuario:usuario@cluster0.cqig3.mongodb.net/test?retryWrites=true&w=majorityity'

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getSolaresApi() {
    this.messageService.add("Cargamos los documentos");
    return this.http.get(this.solaresUrl);
  }
 
  getSolares(): Observable<Solar[]> {
    console.log("estoy en get")
    return this.http.get<Solar[]>(this.solaresUrl).pipe(
      tap(_ => this.log("fetched solares")),
      catchError(this.handleError<Solar[]>("getSolares", []))
    );
  }

  getSolarNo404<Data>(id: number): Observable<Solar> {
    const url = `${this.solaresUrl}/?id=${id}`;
    return this.http.get<Solar[]>(url).pipe(
      map(solares => solares[0]),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} solar id=${id}`);
      }),
      catchError(this.handleError<Solar>(`getSolar id=${id}`))
    );
  }

  getSolar(id: number): Observable<Solar> {
    const url = `${this.solaresUrl}/${id}`;
    return this.http.get<Solar>(url).pipe(
      tap(_ => this.log(`fetched solar id=${id}`)),
      catchError(this.handleError<Solar>(`geSolar id=${id}`))
    );
  }

  searchSolares(term: string): Observable<Solar[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Solar[]>(`${this.solaresUrl}/?name=${term}`).pipe(
      tap(x =>
        x.length
          ? this.log(`found solares matching "${term}"`)
          : this.log(`no solares matching "${term}"`)
      ),
      catchError(this.handleError<Solar[]>("searchSolares", []))
    );
  }

  addSolar(solar: Solar): Observable<Solar> {
    return this.http.post<Solar>(this.solaresUrl, solar, this.httpOptions).pipe(
      tap((newSolar: Solar) => this.log(`added solar w/ id=${newSolar.id}`)),
      catchError(this.handleError<Solar>("addSolar"))
    );
  }

  deleteSolar(solar: Solar | number): Observable<Solar> {
    const id = typeof solar === "number" ? solar : solar.id;
    const url = `${this.solaresUrl}/${id}`;

    return this.http.delete<Solar>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted solar id=${id}`)),
      catchError(this.handleError<Solar>("deleteSolar"))
    );
  }

  updateSolar(solar: Solar): Observable<any> {
    return this.http.put(this.solaresUrl, solar, this.httpOptions).pipe(
      tap(_ => this.log(`updated solar id=${solar.id}`)),
      catchError(this.handleError<any>("updateSolar"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`SolarService: ${message}`);
  }
}
