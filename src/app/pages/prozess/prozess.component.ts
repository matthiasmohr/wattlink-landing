import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-prozess',
  standalone: true,
  imports: [],
  templateUrl: './prozess.component.html',
  styleUrl: './prozess.component.scss'
})
export class ProzessComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    //this.cdr.detectChanges();
  }

}
