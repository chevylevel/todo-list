module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"  // Make sure ts-jest uses the correct tsconfig
        }
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',  // Ensure ts-jest handles .tsx files
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mocks CSS modules and related assets
    }
};
