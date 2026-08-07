# Self-hosted production platform

## Public summary

Steven provisioned and operates a two-server Linux production platform for
Pole Vault Meet Manager, Landon Check-In, and the Pole Rental web frontend. The
Pole Rental API remains on Cloudflare Workers, while the public web experiences
can run on either self-hosted origin.

## Platform design

1. A primary and a secondary Linux mini server run mirrored application
   services under systemd.
2. Each server has an independent Cloudflare Tunnel origin.
3. Cloudflare Load Balancing preserves the public hostname, checks aggregate
   application health, and moves traffic to the healthy server when an origin
   degrades.
4. Secure Tailscale access supports administration without exposing SSH to the
   public internet.
5. Shared data services allow authentication and core workflows to survive an
   origin change.

## Operations Steven implemented

- Repeatable application deployment plus a scheduled synchronization backstop
- Aggregate health endpoints, one-minute external checks, and five-minute
  synthetic user-flow checks
- A server-health dashboard, incident evidence, early-warning categories, and
  a native monitoring client
- Guarded weekly maintenance that verifies peer health and public failover
  before rebooting an origin
- Encrypted restic backups to local USB storage and network-attached storage
- Backup retention checks, sample restores, and recurring restore-drill reminders
- UPS monitoring with a guarded clean shutdown path for sustained power loss
- Controlled failover drills that drain and restore one origin at a time

## Public wording

Describe this as production infrastructure ownership, not merely “hosting a
website.” Steven designed the topology, provisioned the servers, automated the
services and maintenance, implemented monitoring and backup workflows, and
tested failover and recovery behavior.

Do not publish tunnel IDs, server addresses, account IDs, secret locations, or
private health endpoints.
