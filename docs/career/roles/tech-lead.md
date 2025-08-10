# Tech Lead

The following are my thoughts on what it means to be a good tech lead after playing the role for 2 years. I am by no means highly experienced, but I have enough mileage now that I want to record my thoughts for the next time I take on the role. This is a document written to my future self - but if you happen to be reading it hopefully there is something of use here for you as well.

## Responsibilities of the TL

Congrats on becoming a TL! This is an acknowledgement of your skill and capability as an individual contributor. As an early career IC, I felt a sense of overwhelm with everything there was to learn in order to build, test and ship software. Taking on the tech lead role required me to level up a whole new set of skills (with a lot less documentation and direction) that gave me a new wave of this feeling.

The primary responsibility of the TL is to ensure the successful delivery of a technical product throughout the software development lifecycle from inception to distribution. This requires the TL to wield project, product and people management skills along with the technical skills they have developed as an IC. I break this down into the following responsibilities.

### Design and Document the High Level Solution

The tech lead owns the technical blueprint for a product or project. If that blueprint only exists in their head and in discussions in meetings with stakeholders and leadership, then the ICs on the team are not empowered to provide feedback and drive work themselves. This is why I believe the TL should take the lead on documentation for the solution and drive conversations with the team to ensure alignment on technical decisions and direction.

### Take Ownership over the Backlog

Once a high level design is in place, it needs to be translated into the incremental changes that bring it from conception to delivery. I believe the refinement process should be a team effort between the product owner and all ICs on a team. This promotes a sense of ownership and a healthy feedback loop that circumvents an anti-pattern of top down dependency that can easily form.

At the end of the day, I believe the tech lead owns the technical deliverable and should have a related sense of ownership over the backlog and stories the team is taking on. Even if you aren't refining each and every story - and you shouldn't - you should be aware of what is being done and verify that each piece fits nicely into the larger puzzle.

### Review Changes

As an IC, you likely already formed a routine around code review. I would say the utility of this skill changes as a TL. You should intentionally avoid assuming the role of primary reviewer - this can lead you down the path of becoming the gatekeeper of your team's progress as you will often be too busy to oversee each change. However, you should try to get eyes on as many changes as you can. This helps you keep your finger on the pulse of the project, gives you opportunity to provide a layer of quality control if needed, and gives you context to provide feedback and mentor other developers on your team.

### Coordinate Releases

Depending on the maturity of the team and processes built around release, this may or may not be a large part of your role. Where needed, you should provide the oversight needed to ensure the install of changes does not disrupt daily operations of the business and that your team is well equipped to perform any post install validation activities needed to validate the success of a change.

### Set the Tone and Team Dynamic

I believe any senior member of a team has the responsibility to create a culture of positivity, candor, and eagerness to lend a hand through example. You should actively work to help others feel valued for their contributions and at home amongst the team. Demonstrate gratitude and how to provide respectful feedback when required.

### Help Team Members with Professional Development

A TL is often a peer who is taking on a leadership role rather than a position that has direct reports. That said, a TL is best situated to understand the strengths and weaknesses and opportunities for technical growth within their team. I believe it is important for a TL to work with a people leader to provide feedback when appropriate to help guide the improvement of the team and actively seek to identify opportunities in the upcoming work to help individuals grow and feel engaged in their work.

### Improve the Development Process

Often tangible deliverables supercede the maintenance work that allows a tech org to perform efficiently. I believe the TL should identify gaps and inefficiencies in the software development process and find solutions to help improve developer productivity and overall experience.

### Advocate for the Team

As a TL, I felt I was best situated to understand the stresses and capabilities of my team. I feel it is the responsibility of the TL to communicate when the team is being overstretched or when asks and timelines are not realistic. They should be able to collaborate with leadership and stakeholders to balance a realistic delivery timeline and still provide the optimal version of a product within those constraints. The TL should be able to identify noise and busy work and push for higher leverage work to be prioritized in times of crunch to help protect the team from burnout.

### Be the Glue

Here, I refer the reader to Tanya Reilly's fantastic [talk](https://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fwww.noidea.dog%2F&source_ve_path=MTY0OTksMjg2NjQsMTY0NTAz&v=KClAPipnKqw&feature=youtu.be) on [glue work](https://www.noidea.dog/glue) that became extremely salient to me in my time as a tech lead. Between the tickets lies a TON of work required to ensure that everyone is moving in the same direction as efficiently as possible. I believe when serving as a TL, it becomes your responsibility to fill in the gaps as needed to ensure the team is set up to succeed. This kind of work is hard to predict, not glamorous, and not often highly visible when done well. But it is essential to any project to run smoothly and allows for you to leave room for other members of your team to shine.

## The Mind Map of a TL

Here is a short list of what I felt I needed to keep in my head in this role, that wasn't already required as an IC:

- **Platform and Product Roadmap** - The what and when of the requirements.
- **Architectural Decisions** - The decisions behind how best to meet the requirements.
- **How Value is Defined** - Understand what brings value to your particular business's use case. Not all businesses have the same incentives that drive the value of different engineering practices.
- **Motivations of Others** - Understanding what motivates your stakeholders, partner teams, leadership and team members helps you make good decisions about what to prioritize in your day to day at work. This will give you a framework on how to bring others along and succeed as a team.

## What I struggled with as a TL

### Time Management

In my opinion, this is the Sisyphus' rock of being a tech lead. You are pulled into hours of meetings, asked to consult with other teams, need to drive alignment, respond to emergencies in production, design solutions and facilitate their implementation across a team of engineers with varying predilections, temperaments and talents and often this cannot all be done within an 8 hour work day. This took a while for me to get the hang of and where I feel I really developed was in being intentional with how I planned my days, pushing for clear meeting agendas and cancelling meetings that could not be justified, delegating my responsibilities when needed and getting comfortable saying no to additional asks when I was beyond my bandwidth.

### Saying No

Saying no is an essential skill. It's hard for me to say no - I like the way it feels to be eager to take on a piece of work and help deliver it. But the TL is in a unique position to understand their team's limitations and bandwidth and is responsible for helping to manage the inflow of work. Where others are eager to say yes, the TL should be comfortable saying no - or at least asking what can be deprioritized in order to say yes. It's the role of the TL to protect their team's time and ensure they are able to deliver the highest priority work.

### Being the Bearer of Bad News

Along the same theme of being willing to disappoint, it is important that a TL has the ability to be candid when things are not going well. Maybe the environment for CI is experiencing an outage and slowing down code review or maybe a feature has quietly undergone scope creep or a number of back and forth requirements changes that have led to inefficient delivery. Being forthcoming about disfunction or risk to timelines helps leadership make more informed decisions.

### Prioritizing the Team

There were a million and one distractions nagging for my attention on a daily basis when I was a TL. A lot of shiny ways to be impactful will present themselves but the difference between being an IC and a TL is that the role requires you put your team's ability to deliver first and foremost. Ticket refinement is not shiny and special, but it is instrumental to ensuring requirements are well understood and your team is empowered to deliver on what is expected. Pairing and code review can be tedious and unseen, but it ensures that deliverables are of high quality and that the team can grow. The team should always come first.

## Advice from other TLs

The following advice was given to me by other tech leads when I first took on the role:

- Learn to balance your old skill set with the new skill set. Your role is now less about shipping code and more about helping facilitate the team's ability to deliver the project correctly.
- Meetings will expand to fill any gaps in your calendar. Block time for deep work and focusing on your team's needs.
- Learn ways to unblock the team and protect their time.
- The hats you will wear will be many. For the team you will be the:
  - Systems Architect and Business Analyst who is responsible for knowing the platform architecture and philosophy and converts business requirements into technical solutions that fit these patterns.
  - Project Planner who is responsible for breaking down the work into small deliverables and who can synchronize the deliverables to be as async/parallel as possible.
  - Still a Software Dev, but Team Lead first. Don't fall into the trap of performing heroics. It is your responsibility to clearly communicate issues and potential solutions.

## Helpful Reads

- [Scrum from the Trenches - Refinement is a Team Responsibility](https://www.scrum.org/resources/blog/scrum-trenches-product-backlog-refinement-scrum-team-responsibility)
- [Tanya Reilly on Glue Work](https://www.noidea.dog/glue)
- [The Manager's Path by Camille Fournier](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)
