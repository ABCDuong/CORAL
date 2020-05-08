import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coralNg';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  // async getModifyEntriesComponent() {
  //   this.viewContainerRef.clear();

  //   const { ModifyEntriesComponent } = await import('@modules/pages/modify-entries/modify-entries.component');
  //   this.viewContainerRef.createComponent(
  //     this.cfr.resolveComponentFactory(ModifyEntriesComponent)
  //   );
  // }
}
