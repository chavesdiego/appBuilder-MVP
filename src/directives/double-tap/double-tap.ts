import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';

declare var Hammer;
/**
 * Generated class for the DbClickDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[doubleTap]' // Attribute selector
})

export class DoubleTapDirective  implements OnInit, OnDestroy {
  el: HTMLElement;
  pressGesture: Gesture;

  @Output() doubleTap: EventEmitter<any>= new EventEmitter();

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.pressGesture = new Gesture(this.el, {
    recognizers: [
      [Hammer.Tap, {taps: 2}]]
    })

      this.pressGesture.listen()
      this.pressGesture.on('tap', e => this.doubleTap.emit(e) )
  }

  ngOnDestroy() {
    this.pressGesture.destroy();
  }

}
