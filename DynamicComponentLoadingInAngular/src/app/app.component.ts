import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Component Loading';
  message = 'Hi How Are You?';
  @ViewChild('greetComponent', {read: ViewContainerRef}) private greetVcr? : ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef ,private componentFactoryResolver: ComponentFactoryResolver){

  }

  async loadGreetComponent() {

    this.viewContainerRef.clear();
    const {GreetComponent} =await import('./greet.component');
    let greetComponent =  this.greetVcr?.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(GreetComponent)
    );
    if(greetComponent !== undefined){
      greetComponent.instance.greetingMessage = this.message;
      greetComponent.instance.sendMessageEvent.subscribe(
        (data:any)=>{
          console.log(data);
        }
      );
    }
    

  }
}
