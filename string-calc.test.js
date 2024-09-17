describe('My string calculator', () => {

    describe('Adding a string of comma-separated numbers', () => {
        const { add } = require('./string-calc');
        let sum;

        it('returns 0 for an empty string input', () => {
            sum = add('');
            expect(sum).toEqual(0);
        });
    });

});