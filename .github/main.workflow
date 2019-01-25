workflow "New workflow" {
  on = "push"
  resolves = ["gh-pages"]
}

action "gh-pages" {
  uses = "gdiggs/gh-actions/cra-gh-pages@master"
  secrets = ["GITHUB_TOKEN"]
}
