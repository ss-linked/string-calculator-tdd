describe('My string calculator', () => {

    describe('Adding a string of comma-separated numbers', () => {
        const { add } = require('./string-calc');
        let sum;

        it('returns 0 for an empty string input', () => {
            sum = add('');
            expect(sum).toEqual(0);
        });
        it('returns the same number if a single number is supplied', () => {
            const singleNumInputs = ['1', '2', '3', '5', '10', '15', '28', '33', '512', '1024'];
            for (const stringNum of singleNumInputs) {
                sum = add(stringNum);
                expect(sum).toEqual(Number(stringNum));
            }
        });
    });

});