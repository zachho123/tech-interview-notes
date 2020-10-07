# System Design Interview

## Basic Steps

### 1. Ask clarifying questions
* Who is the customer or end user?
* What is the problem we're trying to solve?
* What features should the system provide?
* Are there any speed restrictions / thresholds to meet?
* How many requests should we be able to handle?

### 2. Determine List of Requirements + Properites of the System
* Is our system read or write heavy?

### 3. Design Diagram

#### Typical/Basic System Components
* External Internet (Requests originate from here)
* Load Balancer
* Web Server
* Software Component (Business Logic)
* Persistent Storage (Database)

### 4. Discuss and Evolve Design
* Be prepared to discuss trade-offs, different approaches/possibilities, and the reasons behind your design decisions

## System Design Concepts
* Load Balancing
* SOA (Service-Oriented Architecture)
* Scaling
* Caching
* Databases
* APIs

## Trade-Offs
* Performance vs Scalability
* Latency vs Throughput
* Availability vs Consistency