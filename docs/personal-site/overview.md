---
sidebar_position: 1
---

# Overview

## notebook.james.codes

**Repo:** https://github.com/James-D-Wood/James-D-Wood.github.io

This project is meant to be low friction, low cost and high productivity.
I find that being able to write about my learning and document my work is the best
way to keep myself engaged in daily coding.
I orginally designed my own blogging solution on my main site which I will continue
to use from time to time, but I started using docusaurus as my engineering journal
at work and I found it more appealing for a number of reasons. For one, mostly everything
I want including markdown rendering, code syntax highlighting and mermaid diagram
rendering comes with little effort out of the box. Plus, there is already a working
pattern for deploying build directly to GitHub pages which means CI and hosting are
free for my online developer journal. If I feel like adding a bit of pizazz down the
road, docusaurus supports React for standalone pages. This seemed to be the best of
all worlds to me.

## jameswood.dev

**Frontend Repo:** https://github.com/James-D-Wood/personal-site-react-ui  
**Backend Repo:** https://github.com/James-D-Wood/personal-site-go-server

This is my original personal site project. I used it to learn more about AWS and
showcase a bit of knowledge across the stack. As I start looking toward creating
other projects (an iOS recipe app, maybe some game dev in the future) I will use
this site as a portfolio and jumping off point for exploring my work.

The real value of having an EC2 instance is the relatively cheap backend set up.
api.jameswood.dev will probably be my universal backend for any smaller projects
I have until they mature to the point where they require a dedicated instance.

## Architecture

```
                            GH Pages
                         ---------------
                        |               |
notebook.james.codes    |               |
------------------------->  Docusaurus  |
                        |               |
                        |               |
                         ---------------

                                AWS EC2 Instance
     ------------------------------------------------------------------------
    |                                                                        |
    |                               Front End                                |
    |                  Serve       ------------                              |
    |                 index.html  |            |                             |
    |               ------------> |  React App |                             |
    |  www.*       |              |            |                             |
    |              |               ------------                              |
    |          ------------                                                  |
jameswood.dev |            |                                                 |
------------> |   Apache   |          systemd service                        |
    |         |            |      ---------------------                      |
    |          ------------      |    Back End         |      Database       |
    |              |             |     ------------    |    ------------     |
    |  api.*       |             |    |            |   |   |            |    |
    |               ------------>|    | Golang API |<----->| PostgreSQL |    |
    |                 Reverse    |    |            |   |   |            |    |
    |                  Proxy     |     ------------    |    ------------     |
    |                 to :8080   |                     |                     |
    |                             ---------------------                      |
    |                                                                        |
     ------------------------------------------------------------------------


```
