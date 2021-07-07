import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  // @HostListener('click') foo(){

  //   alert("Hello I am here");
  // }
  constructor(private element: ElementRef, private render: Renderer2) {
    this.changeBgColor("red");
   }

  changeBgColor(color:string){
   this.render.setStyle(this.element.nativeElement,'color', color);
  }

  @HostListener('mouseover') onMouseOver(){
    this.changeBgColor("red");
    this.border = '5px solid green';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.changeBgColor('green');
    this.border = '';
  }
  @HostBinding('style.border') border? : string;

}
