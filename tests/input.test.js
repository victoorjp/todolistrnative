import { fireEvent, render } from '@testing-library/react-native';
import { Input } from '../components/Input';

describe('Componente Input', () => {
  it('Deve renderizar com o valor inicial', () => {
    const { getByPlaceholderText } = render(<Input value="teste" onChangeText={() => {}}/>);
    expect(getByPlaceholderText('Escreva um item').props.value).toBe('teste');
  });

  it('Deve chamar onChangeText ao digitar', () => {
    const mockFn = jest.fn();
    const { getByPlaceholderText } = render(<Input value="" onChangeText={mockFn}/>);

    fireEvent.changeText(getByPlaceholderText('Escreva um item'), 'novo texto');
    expect(mockFn).toHaveBeenCalledWith('novo texto');
  });
});