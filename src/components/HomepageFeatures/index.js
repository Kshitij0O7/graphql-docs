import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import { CardIcon, ChainIcon, CheckIcon, MigrateIcon, ToolIcon } from "./icons";
import { useRevealOnScroll } from "./useRevealOnScroll";
import {
  bitqueryTools,
  chains,
  coinpathBullets,
  coinpathDocsUrl,
  dataTypes,
  flowNodes,
  liteUrl,
  modelCards,
  startHereSteps,
  statusUrl,
  v1V2GuideUrl,
  v2DocsUrl,
} from "./sectionsData";

function SectionHead({ num, kicker, title, titleId, children, className }) {
  return (
    <div className={clsx(styles.secHead, styles.reveal, className)}>
      {num ? <span className={styles.secNum}>{num}</span> : null}
      <div>
        {kicker ? <div className={styles.sk}>{kicker}</div> : null}
        <h2 id={titleId}>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
    </div>
  );
}

function CardLink({ item, className, children }) {
  if (item.external || item.href?.startsWith("http")) {
    return (
      <a href={item.href || item.to} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={item.to || item.href} className={className}>
      {children}
    </Link>
  );
}

function StepCard({ step }) {
  const body = step.bodyHasNetworkCode ? (
    <>
      Explore the schema, pick a chain with the <code>network</code> argument, and run a query.
    </>
  ) : (
    step.body
  );

  const inner = (
    <>
      <span className={styles.stepN}>{step.step}</span>
      <h3>{step.title}</h3>
      <p>{body}</p>
      <div className={styles.scode}>
        {step.codeParts.map((part, i) =>
          part.cls ? (
            <span key={i} className={styles[part.cls]}>
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </div>
      <span className={styles.slnk}>
        {step.linkLabel} <span className={styles.arrow}>→</span>
      </span>
    </>
  );

  if (step.external) {
    return (
      <a href={step.href} className={styles.step} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={step.to} className={styles.step}>
      {inner}
    </Link>
  );
}

function DataCard({ item }) {
  return (
    <CardLink item={item} className={styles.dcard}>
      {item.flag ? <span className={styles.flag}>{item.flag}</span> : null}
      <CardIcon id={item.id} className={styles.ic2} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.root ? <span className={styles.root}>{item.root}</span> : null}
      <span className={styles.cardLnk}>
        Open docs <span className={styles.arrow}>→</span>
      </span>
    </CardLink>
  );
}

function ModelCard({ item }) {
  return (
    <CardLink item={item} className={styles.dcard}>
      <CardIcon id={item.id} className={styles.ic2} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className={styles.cardLnk}>
        {item.linkLabel} <span className={styles.arrow}>→</span>
      </span>
    </CardLink>
  );
}

function ToolCard({ item }) {
  return (
    <a href={item.href} className={clsx(styles.dcard, styles.tool)} target="_blank" rel="noopener noreferrer">
      <ToolIcon id={item.id} className={styles.ti} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className={styles.tlnk}>
        {item.linkLabel} <span className={styles.arrow}>→</span>
      </span>
    </a>
  );
}

export default function HomepageFeatures() {
  useRevealOnScroll(styles.reveal, styles.revealIn);

  return (
    <div className={styles.home}>
      <section className={styles.start} aria-labelledby="start-h">
        <div className={styles.wrap}>
          <div className={clsx(styles.startHead, styles.reveal)}>
            <h2 id="start-h">Your first query in 5 minutes.</h2>
            <p>Three steps from free token to live blockchain data.</p>
          </div>
          <div className={clsx(styles.steps, styles.reveal)}>
            {startHereSteps.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.block} id="data" aria-labelledby="data-h">
        <div className={styles.wrap}>
          <SectionHead num="01" kicker="What you can query" title="Data & APIs" titleId="data-h">
            Every dataset lives under one unified GraphQL schema. The mono tag shows the GraphQL field to start from.
          </SectionHead>
          <div className={clsx(styles.grid, styles.g4, styles.reveal)}>
            {dataTypes.map((item) => (
              <DataCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.block, styles.blockFlush)} id="coinpath" aria-labelledby="cp-h">
        <div className={styles.wrap}>
          <div className={clsx(styles.coinpath, styles.reveal)}>
            <div>
              <div className={styles.ck2}>Signature of V1 · Compliance & forensics</div>
              <h2 id="cp-h">Trace the money with Coinpath®</h2>
              <p>
                The original on-chain money-flow API — follow funds from any wallet, hop by hop, across chains. The
                investigative tooling behind audits, exchange compliance and newsroom reporting.
              </p>
              <ul className={styles.cpList}>
                {coinpathBullets.map((bullet, i) => (
                  <li key={i}>
                    <CheckIcon />
                    <span>
                      {bullet.bold ? <b>{bullet.bold}</b> : null}
                      {bullet.text}
                      {bullet.bold2 ? <b>{bullet.bold2}</b> : null}
                      {bullet.text2}
                    </span>
                  </li>
                ))}
              </ul>
              <div className={styles.cta}>
                <Link className={styles.bqBtnPrimary} to={coinpathDocsUrl}>
                  Coinpath® docs <span className={styles.arrow}>→</span>
                </Link>
                <a className={styles.bqBtnSecondary} href={liteUrl} target="_blank" rel="noopener noreferrer">
                  Open Moneyflow Lite
                </a>
              </div>
            </div>
            <div className={styles.flowviz} aria-hidden="true">
              {flowNodes.map((node, i) =>
                node.conn ? (
                  <div key={i} className={styles.fconn}>
                    <span className={styles.line} />
                    {node.conn}
                  </div>
                ) : (
                  <div key={i} className={clsx(styles.fnode, node.variant && styles[node.variant])}>
                    <span>{node.address}</span>
                    <span className={styles.fnodeTag}>{node.tag}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(styles.block, styles.blockFlush)} aria-labelledby="model-h">
        <div className={styles.wrap}>
          <SectionHead num="02" kicker="Build multi-chain apps faster" title="One schema, every chain" titleId="model-h">
            V1&apos;s unified GraphQL means you don&apos;t learn a new API per chain. Keep the query the same and change
            the <code className={styles.ic}>network</code> argument — try it live in the hero panel above.
          </SectionHead>
          <div className={clsx(styles.grid, styles.g4, styles.reveal)}>
            {modelCards.map((item) => (
              <ModelCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.block, styles.blockFlush)} aria-labelledby="tools-h">
        <div className={styles.wrap}>
          <SectionHead num="03" kicker="Explore without code" title="Tools & explorers" titleId="tools-h">
            Poke at the same data in the browser before you write a query.
          </SectionHead>
          <div className={clsx(styles.grid, styles.g4b, styles.reveal)}>
            {bitqueryTools.map((item) => (
              <ToolCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.block, styles.blockFlush)} id="chains" aria-labelledby="ch-h">
        <div className={styles.wrap}>
          <SectionHead num="04" kicker="Coverage" title="Supported blockchains" titleId="ch-h">
            40+ networks — pass the network name as an argument. A few of the most-used:
          </SectionHead>
          <div className={clsx(styles.chGrid, styles.reveal)}>
            {chains.map((chain) => (
              <Link key={chain.id} to={chain.to} className={styles.ch}>
                <ChainIcon id={chain.id} />
                {chain.name} <span className={styles.arg}>{chain.arg}</span>
              </Link>
            ))}
            <a href={statusUrl} className={clsx(styles.ch, styles.chMore)} target="_blank" rel="noopener noreferrer">
              + 34 more chains →
            </a>
          </div>
        </div>
      </section>

      <section className={clsx(styles.block, styles.blockFlush)} aria-labelledby="mig-h">
        <div className={styles.wrap}>
          <div className={clsx(styles.migrate, styles.reveal)}>
            <span className={styles.mi}>
              <MigrateIcon />
            </span>
            <div className={styles.mt}>
              <h3 id="mig-h">Need real-time streaming?</h3>
              <p>
                <b>V2</b> adds WebSocket subscriptions, Kafka, Solana gRPC and an MCP server for AI agents — on a new
                schema. V1 stays fully supported for unified GraphQL and Coinpath®.
              </p>
            </div>
            <div className={styles.mcta}>
              <a className={styles.bqBtnPrimary} href={v2DocsUrl} target="_blank" rel="noopener noreferrer">
                Explore V2 docs <span className={styles.arrow}>→</span>
              </a>
              <Link className={styles.bqBtnSecondary} to={v1V2GuideUrl}>
                V1 vs V2 guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
