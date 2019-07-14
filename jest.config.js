module.exports = {
    setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
        './src/testSetup/jestSetup.js'
    ],
};
