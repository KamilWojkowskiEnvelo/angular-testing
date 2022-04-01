import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  getSchema(): { age: number; name: string } | undefined {
    return;
  }
}


@Injectable({
  providedIn: 'root',
})
export class TestowyService {
  // eslint-disable-next-line no-unused-vars
  constructor(private schemaService: SchemaService) {

  }

  public createForm() {
    const schema = this.schemaService.getSchema();

    return new FormGroup({
      name: new FormControl(schema?.name || ''),
      age: new FormControl(schema?.age || ''),
    });
  }
}
