# Code Review

The following are my thoughts and runbook on how to do an effective code review.

## Philosophy

### Role of the Reviewer

The purpose of code review is to help maintain the garden, not stop others from planting. Reviewers may offer tips for optimal growth but should respect the autonomy in style of others. The power to put one's foot down should only be used when practices that will lead to damaging weeds or pests are observed.

From Google's `'The Standard of Code Review'`

> In general, reviewers should favor approving a CL once it is in a state where it definitely improves the overall code health of the system being worked on, even if the CL isn’t perfect.

### Reviewing for Substance not Style

Giving feedback on style without a basis in functionality is often pedantic and not good for relationship building with other developers or the health of a code base. I prefer languages that aim to remove opinionated style (see `go fmt`) or support tooling that allows for codified style (ie: `prettier`). This removes needless friction in code review.

### Review Should be Fast

The longer it takes to get a review through, the more development work stacked on top of the change will ultimately need to be reworked. This is a bad experience for both contributor and reviewer.

### Changes Should be Small

In order to facilitate fast and thorough review, the size and scope of change sets should be kept to a minimum to reduce feedback loops and cognitive load on a reviewer.

### Discourse Should be Empathetic

Disagreements between reviewer and contributor are inevitable - but each party should approach feedback and discourse with the proper empathy for the other engineer. At the end of the day, we are all working toward the same goal.

I find that [conventional comments](https://conventionalcomments.org/) are a way to provide feedback in a clear, concise and kind way.

## Reviews Step by Step

### Pre-Review Checklist

- [ ] I understand the change
- [ ] I agree that the change should be made
- [ ] I agree that the change is the correct solution to the problem
- [ ] CI is passing
- [ ] Time is blocked for focus on the review

### Review Checklist

#### Functionality & Logic

- [ ] Is the stated problem or goal of the change being solved?
- [ ] Are any potential edge cases handled correctly?
- [ ] Is error handling comprehensive?
- [ ] Are there any bugs or logical errors?
- [ ] Are there potential concurrency issues?

#### Code Quality

- [ ] Is the code readable and well-structured?
- [ ] Are variable and function names descriptive?
- [ ] Is the code following established patterns and conventions?
- [ ] Are functions/methods appropriately sized?
- [ ] Is there unnecessary code duplication?

#### Testing & Documentation

- [ ] Are there appropriate tests for new functionality?
- [ ] Do tests cover edge cases and error conditions?
- [ ] Is documentation updated (README, API docs, comments)?
- [ ] Are complex algorithms or business logic commented?
- [ ] Are breaking changes clearly documented?

#### Security

- [ ] Are there any security vulnerabilities?
- [ ] Is sensitive data properly handled?

#### Performance

- [ ] Are there performance implications?
- [ ] Are database queries optimized?
- [ ] Is memory usage reasonable?

#### Architecture & Design

- [ ] Does the code fit well with existing architecture?
- [ ] Are abstractions appropriate?
- [ ] Is the code modular and maintainable?
- [ ] Are dependencies appropriate and necessary?

#### Positive Feedback

- [ ] Find something to compliment in the change
- [ ] Express genuine delight when it occurs

## Helpful Reads

### General

- [Google's Eng Practices - Code Review](https://google.github.io/eng-practices/review/reviewer)
- [Gerglely Orosz on Better Code Reviews](https://blog.pragmaticengineer.com/good-code-reviews-better-code-reviews/)
- [Conventional Comments](https://conventionalcomments.org/)

### Language Specific

- [Google's Go Style Guide](https://google.github.io/styleguide/go/)
- [Go - Common Code Review Comments](https://go.dev/wiki/CodeReviewComments)
- [Go - Effective Go](https://go.dev/doc/effective_go)
