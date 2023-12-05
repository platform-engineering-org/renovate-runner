module.exports = {
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "github>platform-engineering-org/.github"
    ]
  },
  hostRules: [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_TOKEN
    }
  ],
  autodiscover: false,
  repositories: [
    "lmilbaum/hyperconverged-cluster-operator",
    "crc-org/crc-cloud",
    "devfile/registry",
    "ralphbean/dnf-plugin-lockfile",
    "kubevirt/hyperconverged-cluster-operator",
    "platform-engineering-org-test/renovate-test",
    "platform-engineering-org-test/renovate_test_2"
  ],
  constraints: {
    go: "1.19"
  }
};
