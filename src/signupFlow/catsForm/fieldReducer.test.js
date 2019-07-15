import reducer from './fieldReducer';

describe('fieldReducer', () => {
  describe('reducer', () => {
    it('merges any field change into the existing fields', () => {
      const result = reducer(
        {
          firstField: { value: 'some-value' },
          secondField: { value: 'some-value' },
        },
        { type: 'UPDATE_FIELD_VALUE', data: { name: 'firstField', value: 'some-new-value' } },
      );

      expect(result).toEqual({
        firstField: { value: 'some-new-value' },
        secondField: { value: 'some-value' },
      });
    });

    it('errors if the action is unknown', () => {
      try {
        reducer({}, { type: 'UNKNOWN' });
        jest.fail('should have thrown by now');
      } catch (error) {
        expect(error.message).toBe('This should not happen');
      }
    });
  });
});
