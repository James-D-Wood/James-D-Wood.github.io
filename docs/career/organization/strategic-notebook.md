# Strategic Notebook

The purpose of the strategic notebook is to document the design, contracts and technical details of a given product or capability. This represents the operational knowledge I have about the system I am working on and can be used as a source of truth with stakeholders and teams I am working with when producing software.

## What I record

- **Requirements** - Functional and non-functional requirements
- **Roadmap** - Timelines for project, product or capability
- **Technical Specifications** - Detailed implementation plans and interfaces
- **Data Design** - Logical and physical design for database assets
- **Deployment & Infrastructure Documentation** - Environment configs, CI/CD pipelines, database assets
- **Performance & Monitoring** - SLAs, SLOs, observability strategy
- **Standard Operating Procedures (SOPs) / Runbooks** - The processes I follow for performing different repeated tasks on the system I work on. This can be release, data migration, go live steps, etc.

## Structure

```
strategic-notebook/
└── project-or-capability-name/
    ├── architecture/
    │   ├── adrs/
    │   ├── rfcs/
    │   └── system-design/
    ├── operations/
    │   ├── runbooks/
    │   ├── releases/
    │   └── incident-response/
    ├── technical-specs/
    │   ├── apis/
    │   ├── database/
    │   ├── events/
    │   ├── flows/
    │   └── infrastructure/
    ├── planning/
    │   ├── requirements/
    │   └── roadmaps/
    └── compliance/
        ├── security/
        ├── performance/
        └── monitoring/
```

## How to Implement this Notebook with a New Project or Product

### Phase 1: Requirements Gathering and Discovery

Start with Planning:

- planning/requirements/ - Capture functional/non-functional requirements
- planning/roadmaps/ - Initial timeline and milestone estimates
- architecture/rfcs/ - High-level approach proposal for team review

Essential Architecture:

- architecture/system-design/ - Create C4 Context and Container diagrams
- architecture/adrs/ - Document first major decisions (tech stack, patterns)

### Phase 2: Design Phase

Technical Specifications:

- technical-specs/apis/ - Define API contracts (OpenAPI specs)
- technical-specs/database/ - Data models and relationships
- technical-specs/flows/ - Key user journeys and system flows
- technical-specs/infrastructure/ - Deployment architecture

Compliance Foundations:

- compliance/security/ - Threat model and security requirements
- compliance/performance/ - SLA targets and performance budgets

### Phase 3: Implementation

Operations Documentation:

- operations/runbooks/ - Create as you build deployment processes
- operations/releases/ - Document release procedures
- technical-specs/events/ - Document event schemas as implemented

Living Architecture:

- Update architecture/adrs/ as decisions evolve
- Refine architecture/system-design/ with Component and Code diagrams

Testing and Benchmarking:

- compliance/performance/ - Record benchmarks and performance testing results

### Phase 4: Production Readiness

Complete Operations:

- operations/incident-response/ - Playbooks and escalation procedures
- compliance/monitoring/ - Dashboards, alerts, SLO definitions
