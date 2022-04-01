
import { render, screen, fireEvent } from '@testing-library/angular';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  it('should render default component state', async () => {
    await render(TestComponent);

    expect(screen.queryByText('test works!')).toBeInTheDocument();
    expect(screen.queryByText('Textarea')).not.toBeInTheDocument();
  });

  it ('should render textarea section if input passed to component has value true', async () => {
    await render(TestComponent, {
      componentProperties: {
        showTextarea: true
      },
    });

    expect(screen.queryByText('test works!')).toBeInTheDocument();
    expect(screen.queryByText('Textarea')).toBeInTheDocument();
  })

  it('should render "other value" text after click on button', async () => {
    const component = await render(TestComponent);

    jest.spyOn(component.fixture.componentInstance.textChanged, 'emit');


    fireEvent.click(screen.getByText('Zmień'));

    expect(screen.queryByText('other value')).toBeInTheDocument();
    expect(component.fixture.componentInstance.textChanged.emit).toHaveBeenCalledWith(true);
  })

  it('test component rendering as string', async () => {
    await render(`<app-test [showTextarea]="value"><p>Jestem dzieckiem</p></app-test>`, {
      declarations: [TestComponent],
      componentProperties: {
        value: true,
      }
    });

    expect(screen.queryByText('test works!')).toBeInTheDocument();
    expect(screen.queryByText('Textarea')).toBeInTheDocument();
    expect(screen.queryByText('Jestem dzieckiem')).toBeInTheDocument();
  })
})
