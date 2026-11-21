# Widget Studio — independent Stoa integration proposal

Live: https://justinrzx.github.io/stoa-widget-studio/

Configure the **official Stoa iframe**, preview it, and copy a referral-bearing snippet for a token project's website. Zero dependencies, no wallet connection, no transaction execution, no API keys, no analytics. This site does not claim to be Stoa or to operate STOA's official website.

## Run and test

```sh
node test.cjs
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766. Change token/referral/payment/theme/amount, update, then copy the embed or shareable preview URL. Settings in a shared URL fragment are public: never put secrets there. Address validation checks syntax and non-zero values, not checksum, ownership or contract legitimacy. Unknown/unroutable tokens are handled by the official widget. Clipboard requires HTTPS or localhost. A restrictive CSP only permits Stoa frames and local scripts/styles.

## Bounty status — approval requested, not fulfilled

The [remaining widget bounty](https://stoadex.com/build#bounties) requires a widget **on an actual token project's website with that project's agreement**. This independent workbench is not enough on its own. No project approval, deployment on the official STOA website, bounty acceptance or payment is claimed. We are asking Stoa whether they want to adopt this integration on an approved project site. No wash trades or fabricated volume.

Example token: STOA `0x13E6993417616De724F2b337D65063f229e96718`, Robinhood Chain 4663. Default referral address belongs to the submitter's linked public wallet: `0x8ee95914b80bab47318bc98b818d36b18ca82b0d`. The UI visibly exposes it and integrators can replace it. It is not the token contract. All exported widgets include the chosen ref; trades/signatures occur only on stoadex.com.

Official documentation: https://stoadex.com/docs/embed

## Integration handoff

1. Obtain explicit project-owner approval and record the approved site URL.
2. Configure the token and referral wallet; verify both independently.
3. Paste the generated snippet into the authorized project page.
4. Check mobile layout, official-frame rendering, and referral propagation on Stoa.
5. Submit the live project URL, approval evidence, source and referral address to Stoa. No bounty entitlement until their review.

## Verification limits

Local unit and browser interaction checks are not a security audit. Quotes are market-dependent. No wallet signing, transaction broadcasting or real swap is part of the test suite. The external iframe can be unavailable independently of this static site.
