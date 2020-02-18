import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreentext]'
})
export class GreentextDirective implements OnInit {

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.elRef.nativeElement.style.color = 'green';
  }
}
