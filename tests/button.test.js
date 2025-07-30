import { fireEvent, render } from '@testing-library/react-native';
import { Button } from '../components/Button';

describe('Button', () => {
  it('Chama a função onPress quando clicado', () => {
    const mockFn = jest.fn();

    const { getByText } = render(<Button OnPress={mockFn}/>);

    fireEvent.press(getByText('Adicionar'));

    expect(mockFn).toHaveBeenCalled();
  });
});