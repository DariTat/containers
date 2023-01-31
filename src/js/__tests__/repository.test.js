import errorReporitory from '../repository';

test('get error', () => {
  const error = new errorReporitory();
  const received = error.translate('125');
  expect(received).toBe('Файл отсутсвует');
});
test('unknown error', () => {
  expect(() => {
    const error = new errorReporitory();
    error.translate('403');
  }).toThrowError('Unknown error');
});
