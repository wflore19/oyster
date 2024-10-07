---
sidebar_position: 5
---

# Making a Pull Request

Some things to keep in mind when making a pull request:

- The target branch in our repository is `main`.
- Fill out the PR template accordingly.
- The name of the PR should:
  - Start with one of the following prefixes:
    - `feat`: A non-breaking change which adds functionality.
    - `fix`: A non-breaking change which fixes an issue.
    - `refactor`: A change that neither fixes a bug nor adds a feature.
    - `docs`: A change only to in-code or markdown documentation.
    - `test`: A change that adds missing tests.
    - `chore`: A change that is likely none of the above.
  - Be in all lowercase.
  - Start with a verb (ie: "add ...", "implement ...", "update ...").
  - Have an emoji at the end of it (we like color around here). 🔥
- Please check the
  ["allow edits from maintainers option"](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
  when creating your PR. This allows us to more easily collaborate with you on
  your work.
- Most PRs should be attached to an issue, so be sure to add this to the PR
  description:
  ```
  Closes #<ISSUE_NUMBER>.
  ```
  See more about
  [linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- A PR can only be merged (by a maintainer) if:
  - A maintainer has reviewed and approved it.
  - All CI checks have passed. See
    [this](https://github.com/colorstackorg/oyster/blob/main/.github/workflows/ci.yml)
    workflow for more details.
  - All branches are up to date before merging.
  - All conversations are resolved.

## Enabling Integrations

- To enable any of our 3rd party integrations in development, please see the
  [How to Enable Integrations](../how-to-enable-integrations.md) documentation.
- To enable sending emails, please see the
  [How to Enable Emails](../how-to-enable-emails) documentation.
