"use client";

import { useState } from "react";
import type { DemoScenario } from "../lib/demo-scenarios";

type ProjectDemoProps = {
  scenario: DemoScenario;
  projectUrl: string;
  liveUrl: string;
};

export function ProjectDemo({ scenario, projectUrl, liveUrl }: ProjectDemoProps) {
  const [activeViewId, setActiveViewId] = useState(scenario.views[0].id);
  const activeView =
    scenario.views.find((view) => view.id === activeViewId) ?? scenario.views[0];

  return (
    <main className="demo-page">
      <section className="demo-masthead">
        <div className="shell demo-masthead-inner">
          <div>
            <a className="demo-back-link" href={projectUrl}>
              <span aria-hidden="true">←</span> Back to project page
            </a>
            <p className="eyebrow">Interactive recruiter demo</p>
            <h1>{scenario.productName}</h1>
            <p>
              Explore representative workflows through a pre-authenticated,
              read-only account built entirely from fictional sample records.
            </p>
          </div>
          <div className="demo-safety-card">
            <span className="demo-safety-label">ISOLATED DEMO</span>
            <strong>No production connection</strong>
            <p>
              No live APIs, databases, payments, media, cameras, authentication,
              or customer data are available from this page.
            </p>
          </div>
        </div>
      </section>

      <section className="shell demo-workspace" aria-label={`${scenario.productName} demo workspace`}>
        <aside className="demo-sidebar">
          <div className="demo-product-mark" aria-hidden="true">
            {scenario.productName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 3)}
          </div>
          <div className="demo-account-card">
            <span>Signed in as</span>
            <strong>{scenario.accountName}</strong>
            <small>{scenario.accountEmail}</small>
            <i>Read-only</i>
          </div>
          <nav className="demo-view-nav" aria-label="Demo features">
            {scenario.views.map((view) => (
              <button
                type="button"
                key={view.id}
                className={view.id === activeView.id ? "is-active" : undefined}
                aria-pressed={view.id === activeView.id}
                onClick={() => setActiveViewId(view.id)}
              >
                <span>{view.label}</span>
                <i aria-hidden="true">→</i>
              </button>
            ))}
          </nav>
          <a className="demo-live-link" href={liveUrl} target="_blank" rel="noreferrer">
            Visit public product <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div className="demo-main">
          <div className="demo-environment-bar">
            <div>
              <span className="signal-dot" />
              <strong>{scenario.environmentLabel}</strong>
            </div>
            <span>Sample data only</span>
          </div>

          <section className="demo-view" aria-live="polite">
            <header className="demo-view-header">
              <div>
                <p className="eyebrow">{activeView.eyebrow}</p>
                <h2>{activeView.title}</h2>
              </div>
              <p>{activeView.description}</p>
            </header>

            <div className="demo-metrics" aria-label="Demo summary metrics">
              {activeView.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="demo-data-layout">
              <section className="demo-table-card">
                <div className="demo-card-heading">
                  <div>
                    <span>Current view</span>
                    <strong>{activeView.tableTitle}</strong>
                  </div>
                  <span className="demo-readonly-pill">Read-only</span>
                </div>
                <div className="demo-table-scroll">
                  <table>
                    <thead>
                      <tr>
                        {activeView.columns.map((column) => (
                          <th scope="col" key={column}>{column}</th>
                        ))}
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeView.rows.map((row) => (
                        <tr key={row.cells.join("-")}>
                          {row.cells.map((cell, index) => (
                            <td key={`${cell}-${index}`}>{cell}</td>
                          ))}
                          <td>
                            {row.status ? (
                              <span className={`demo-status demo-status-${row.status.tone}`}>
                                {row.status.label}
                              </span>
                            ) : (
                              <span className="demo-status demo-status-neutral">Sample</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <aside className="demo-activity-card">
                <div className="demo-card-heading">
                  <div>
                    <span>Context</span>
                    <strong>{activeView.activityTitle}</strong>
                  </div>
                </div>
                <ol>
                  {activeView.activity.map((item, index) => (
                    <li key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </section>

          <div className="demo-boundary-note">
            <strong>Safe by design.</strong>
            <span>
              This recruiter demo stores nothing, submits nothing, and resets on
              refresh. Production systems remain private and unchanged.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
