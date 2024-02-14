module.exports = {
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "local>centos/.github"
    ]
  },
  platformCommit: true,
  hostRules: [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_TOKEN
    }
  ],
  repositories: [
    "centos/.github",
    "centos/centos-bootc",
    "centos/centos-bootc-dev"
  ]
};
