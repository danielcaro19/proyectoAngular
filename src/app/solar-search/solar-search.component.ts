import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Solar } from "../solar";
import { SolarService } from "../solar.service";

@Component({
  selector: "app-solar-search",
  templateUrl: "./solar-search.component.html",
  styleUrls: ["./solar-search.component.css"]
})
export class SolarSearchComponent implements OnInit {
  solares$: Observable<Solar[]>;
  private searchTerms = new Subject<string>();

  constructor(private solarService: SolarService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.solares$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.solarService.searchSolares(term))
    );
  }
}
