import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchMultiService } from '../../services/search-multi.service'
import { Observable, OperatorFunction, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  public model: any;
  searchFailed = false;

  public isScreenWide: Observable<boolean> = of(true);

  constructor(
    private _service: SearchMultiService,
    ) { }

    ngOnInit(): void {
    }
  
  search: OperatorFunction<string, any> = (text$: Observable<string>) =>
      text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchText) => this._service.getSearchRes(searchText).pipe(
        tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
    );
  
   formatter = () => "";
}
