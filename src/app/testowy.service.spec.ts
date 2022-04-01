import { SchemaService, TestowyService } from "./testowy.service";

describe('TestowyService', () => {
  it('if schema doesnt exist', () => {
    const mockSchemaService: SchemaService = {
      getSchema() {
        return undefined;
      }
    }

    const service = new TestowyService(mockSchemaService);

    const form = service.createForm();

    expect(form.controls['name'].value).toBe('');
    expect(form.controls['age'].value).toBe('');
  })

  it('if schema exist', () => {
    const mockSchemaService: SchemaService = {
      getSchema() {
        return {age: 35, name: 'kamil'};
      }
    }

    const service = new TestowyService(mockSchemaService);

    const form = service.createForm();

    expect(form.controls['name'].value).toBe('kamil');
    expect(form.controls['age'].value).toBe(35);
  })
})
