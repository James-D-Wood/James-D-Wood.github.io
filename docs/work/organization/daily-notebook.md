# Daily Notebook

The purpose of the daily notebook is to recording meeting notes, outcomes of conversations, learning and work notes as they happen. I've found that the strength of this notebook is that it allows a developer to produce chronilogical summaries of their work and maintain a record of changes in direction and decision making along the course of a project. The weakness of this notebook is that it doesn't present a current source of truth for what a project should look like. For this, I maintain a separate strategic notebook that services as up to date documentation on the design, payloads, install plans, etc. for a project that should be shared and circulated. Generally, the daily notebook is personal and the strategic notebook is for collaboration.

## What I Record

- **Daily Log** - A running log of my thoughts, meetings, discussions, and learnings through a sprint
- **Stories** - Documentation of any discovery, questions, trade offs, testing and deployment considerations for the units of work I am completing (this is more of a focus when I am an individual contributor)
- **Discovery** - Documentation of progress and decision making behind higher level design (this is more of a focus when I am a tech lead)
- **TODO** - A running todo list of items I am tracking for the current sprint.
- **Summary** - This is to take time to summarize learnings, key decisions and accomplishments each sprint which helps with quickly reviewing your progress over a wider window of time. This helps me track my professional development as a software engineer.

## Structure

The pattern that I have found works for me is the following. I keep a file tree that looks something like the following:

```
notebook/
└── docs/
    ├── year-1/
    └── year-2/
        ├── project-increment-1/
        ├── project-increment-2/
        └── project-increment-3/
            ├── sprint-1/
            ├── sprint-2/
            ├── sprint-2/  
            └── sprint-4/  
                ├── summary.md
                ├── todo.md
                ├── daily_log.md
                ├── discovery/
                │   ├── topic-1/ 
                │   └── topic-2/  
                └── stories/
                    ├── story-id-1/ 
                    └── story-id-2/  
```