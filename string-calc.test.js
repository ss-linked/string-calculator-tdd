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
        it('returns the correct sum for any number of comma-separated numbers', () => {
            const testData = [
                { input: '1,5', expectedOutput: 6 },
                { input: '2,4,6,8,10', expectedOutput: 30 },
                { input: '12,365,512,1024,25519', expectedOutput: 27432 },
                { input: '23,57,1234,5394,35938,80989,6567', expectedOutput: 130202 },
            ];
            for (const { input, expectedOutput } of testData) {
                sum = add(input);
                expect(sum).toEqual(expectedOutput);
            }
        });
        it('returns the correct sum for newline/comma-separated numbers', () => {
            const testData = [
                { input: '1\n5', expectedOutput: 6 },
                { input: '2\n4,6\n8,10', expectedOutput: 30 },
                { input: '12,365\n512,1024\n25519', expectedOutput: 27432 },
                { input: '23\n57\n1234\n5394\n35938\n80989\n6567', expectedOutput: 130202 },
            ];
            for (const { input, expectedOutput } of testData) {
                sum = add(input);
                expect(sum).toEqual(expectedOutput);
            }
        });
    });

});