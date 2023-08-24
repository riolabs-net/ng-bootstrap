import { Component, OnInit } from '@angular/core';
import { InnerModalService } from 'projects/rlb/ng-bootstrap/src/lib/components/modals/inner-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-bootstrap';

  constructor(private inner: InnerModalService) { }

  dialog(): void {
    this.inner.openModal('demo-component', {
      title: 'Demo',
      content: 'This is a demo component',
      ok: 'OK',
      type: 'info'
    }).subscribe((o) => {
      console.log('closed sub', o);
    });
  }
}
