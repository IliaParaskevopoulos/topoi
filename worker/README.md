# Topoi sales-kit server

A small Cloudflare Worker behind the “Make a sales kit” page. It does two things:

- **POST /kit** writes a sales kit with Claude from the visitor’s answers.
- **POST /notify** emails you when a visitor downloads their kit.

Until it is deployed, the sales-kit page still works: it builds a quick draft in the browser,
but no AI writing and no download emails.

## Set it up (about 15 minutes, once)

You need: a free Cloudflare account, an Anthropic API key (console.anthropic.com), and a free
Resend account (resend.com) **created with the Gmail address that should receive notifications**.
Resend’s test sender can only email the account’s own address, which is exactly what we need.

```sh
cd worker
npx wrangler login                       # opens Cloudflare in your browser
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put NOTIFY_EMAIL     # your Gmail address
npx wrangler deploy                      # prints the URL, e.g. https://topoi-kit.<you>.workers.dev
```

Optional, recommended: limit kits per visitor per day (protects your API budget).

```sh
npx wrangler kv namespace create KITS    # copy the id into wrangler.toml and uncomment the block
npx wrangler deploy
```

Then connect the site to the server and publish:

```sh
cd ..
KIT_API=https://topoi-kit.<you>.workers.dev node build.js
git add -A && git commit -m "Connect the sales kit server" && git push
./publish.sh
```

(Or ask Claude to do this last step once you have the URL.)

## Costs and safety

- Each kit is one Claude request of up to 6,000 output tokens. Set a monthly spend limit in the
  Anthropic console.
- Only the origins in `ALLOWED_ORIGINS` can call the server.
- Visitors must tick a consent box. Their answers go to Anthropic (to write the kit) and to you
  (by email, on download). The page asks them not to include confidential information.
