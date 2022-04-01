import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Input() public showTextarea = false;
  @Output() public textChanged = new EventEmitter<boolean>();

  public text = 'test works!';

  public changeText() {
    this.text = 'other value';

    this.textChanged.emit(true);
  }
}
