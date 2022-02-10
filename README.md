
# Roguelike application skeleton

## First steps

Really just here to remind you friend ;)

## Basics (manual deprecated way)

1. Clone this repository locally
1. Do an `npm install` in the root
1. Do a `git submodule update --remote libs` to get the latest version of the libs subrepo
1. Create a new repository on Github

## The better way

Github now supports Template repositories where you can create a copy without it being a fork. This repo is a template repository so go to the main page on Github and create a copy of it from there

## Github CI/CD and itch.io

1. Navigate to `Repo root > Settings > Secrets > Actions`
1. Create a "Repository secret" and name it `ITCHIO_BUTLER_TOKEN` and insert your butler token (from LastPass)
1. Edit the `main.yml` in the root and replace the commented section
1. Push your changes

*A build on Github should start automatically and push the result to itch.io!*

## Common issues

1. If the skeleton is out of date with the `rl-lib` version
  1. `npm i` new packages
  1. Update versions as needed

