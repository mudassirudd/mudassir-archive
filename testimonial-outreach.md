# Getting real testimonials

The testimonials section on the site is built and **hidden**. It turns itself on
the moment you put a real entry in the `TESTIMONIALS` array near the bottom of
`index.html`.

Do not put anything in that array that a client didn't actually say. An
invented testimonial costs you the deal *and* the relationship the first time
someone checks it — and clients do get asked, especially on referrals.

---

## Why these messages are shaped the way they are

Three things separate a message that gets a usable quote from one that gets
"he was great to work with" (which is worth nothing) or silence:

1. **Draft the quote for them.** "Here's something I wrote — change anything
   that's wrong" converts far better than "could you write me a testimonial."
   People want to help you and don't want homework. It also comes back
   *specific*, because you seeded the specifics.
2. **Ask at most two narrow questions**, phrased so a one-line answer is
   usable verbatim. "What was hard before / what changed" produces a real
   quote. "How did I do" produces a compliment.
3. **Bundle the permission ask**, so there's no awkward second conversation —
   and **make "no" easy**. Counter-intuitively this raises the yes rate: it
   signals you're not going to be weird about it.

Send these one at a time, not as a blast. Personalise the first line.

---

## 1. Mehvish Guest House

Warmest relationship, plainest register.

> Assalamualaikum [Name], hope the guest house is keeping you busy!
>
> Small favour — I'm putting my work up on my website and I'd love to include
> Mehvish Guest House. Could you reply with a line or two on: what was hard
> about getting enquiries before, and what changed once the website, WhatsApp
> and Google listing went up?
>
> Even two sentences is perfect. And is it okay to use your name and the guest
> house name on my site? Completely fine if not.

*Adjust the greeting to however you normally open with them.*

---

## 2. VapesOz

Most commercial, least warm — so lead with the draft and make it near-zero
effort.

> Hi [Name] — quick one. I'm adding VapesOz to my portfolio and would love a
> short quote from you.
>
> I've drafted something so you don't have to write it:
>
> *"Mudassir built our store end to end — custom theme, product catalogue and
> payment setup. He handled the technical side so we could just get on with
> selling."*
>
> Edit it however you like, or send your own line instead. Also okay to use the
> VapesOz name and a link? No stress if not.

---

## 3. TeaTimesAnytime

Medium warmth — ask the open question, but offer the three-question fallback
for someone who freezes at a blank page.

> Hi [Name]! Hope orders are coming in.
>
> I'm updating my portfolio and TeaTimesAnytime is one I'm proud of. Could you
> send me two or three lines on: how were customers reaching you before the
> site, and what's different now that enquiries come through it?
>
> If it's easier, just answer these: (1) what you needed, (2) what I did,
> (3) would you recommend me. And okay to use your name and the brand?

---

## 4. Kirana — send this one first

**This is the most valuable testimonial you can get** and it's the one missing
from your plan. Kirana is your featured engineering project, and its owner is
the only client who can speak to software *reliability* — that it runs, that it
holds up, that you fix things — rather than to a website looking nice. That's
the thing a recruiter and a serious client both want evidence of, and it's the
one claim you currently have to make about yourself.

> Assalamualaikum [Name], hope business is good.
>
> I'm putting together my portfolio properly and Kirana is the project I'm
> most proud of. Could you reply with a couple of lines on: how were you
> keeping track of stock and orders before, and what's different now?
>
> Anything about whether it's been reliable would mean a lot too — it's been
> running a while now.
>
> Is it okay to use your name and the shop's name? Happy to keep it anonymous
> if you'd rather.

---

## When a reply comes in

**Screenshot it.** That's your consent record. Keep them in a folder — if a
client ever changes their mind or someone questions a quote, you want the
original.

**Tidy, don't rewrite.** Fixing grammar and trimming filler is fine. Changing
what they said is not. If you tighten a quote meaningfully, send the tidied
version back: *"Does this still sound right to you?"* — a yes takes them five
seconds and protects you completely.

**Then paste it into `index.html`**, in the `TESTIMONIALS` array:

```js
const TESTIMONIALS = [
  {
    text: 'What they actually said.',
    author: 'Their Name',
    role: 'Owner, Mehvish Guest House',
    url: 'https://www.mehvishguesthouse.in/', // optional
  },
]
```

The hidden section reveals itself automatically. One real testimonial is worth
shipping — you don't need to wait for three.

**If they'll speak but won't be named:** `role: 'Owner, guest house in [city]'`
is honest and still usable. But push gently for the name first — an attributed
quote is worth several unattributed ones, and an anonymous testimonial
slightly *damages* credibility because readers assume you wrote it.

---

## After the next project

Ask while the delivery glow is still on — the week you hand over, not six
months later when you need it. Two asks, in this order:

1. **The quote.** "Anything you'd be happy for me to put on my site?"
2. **The introduction.** "Do you know anyone else dealing with the same thing?"

The second one is how the referral system in your plan actually works. Most
people will help if asked directly and once. Almost nobody volunteers.
