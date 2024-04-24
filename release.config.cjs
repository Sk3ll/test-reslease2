/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', {
            releaseRules: [{ type: 'initial', release: '0.1.0' }],
        }],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        ['@semantic-release/git', {
            assets: ['package.json', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version}'
        }]
    ]
};
