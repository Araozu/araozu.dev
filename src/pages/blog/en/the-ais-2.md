---
layout: ../../../layouts/BlogLayout.astro
title: My AI turnaround
description: Using the AIs for a month, and generally liking what i see
pubDate: "2025-01-18"
tags: ["ai", "copilot", "claude", "sonnet", "cursor"]
image: 
    url: ""
    alt: ""
    caption: ""
---

So, in my last post I wrote about how my experience of AIs was...
dissapointing, to say the least. However, I was determined to give
them another try, and in January 2025 I bought a marvellous
service that gives you access to basically every AI model. Just
so I can try and compare them.

The results? I think I see better now the value on the AIs,
in certain aspects.


## AIs for getting stuff done

So, at work we use Nestjs/Nextjs/Reactjs, and I have to be honest,
I don't like React, I don't like Redux, I don't even like TypeScript.
But that's what we use. So what if the AI can do the boring work for me?

I used the AIs (mainly Claude 3.5 Sonnet) for solving small problems where
my lack of intricate TS/Nest/Next knowledge kept me at bay. And you know
what? It was actually useful.

I made a little custom AI prompt that talked monke. This is one such example:

```plain
> monke use prisma. monke have data with createdAt date.
> monke want fetch all records in year-to-date. give monke solution

| Monke

ooh ooh! Elder monke help with Prisma query! 🍌

TypeScript
const startOfYear = new Date(new Date().getFullYear(), 0, 1); // first day of current year
const currentDate = new Date(); // today

const records = await prisma.yourModel.findMany({
  where: {
    createdAt: {
      gte: startOfYear,
      lte: currentDate
    }
  }
});
```

I don't like using Prismajs. I don't want to spend my free time learning all its
little moving parts and details. I just want to fetch some data so I can move on
writing my current CRUD app. And the AI is perfect for that. I still know
a lot about TypeScript, I still read any errors that the AI code may have,
but now all I do is fix small issues.


## AIs for boring/repetitive tasks.

The AIs are "smart" enough to apply patterns into an arbitrary input it seems.
I would do something like this:

```plain
> i want only the identifier & types

```

---

```ts
{
  @ApiProperty({
    name: 'dateMovement',
    description: 'Date of the movement',
    example: '2021-09-21',
  })
  @IsDateString()
  @IsOptional()
  dateMovement?: string;

  @ApiProperty({
    name: 'type',
    description:
      'Type of movement to set the movement to. Can only be INPUT or OUTPUT',
    example: 'INPUT',
  })
  @IsString()
  @IsOptional()
  @IsIn(['INPUT', 'OUTPUT'], {
    message: "type must be either 'INPUT' or 'OUTPUT'",
  })
  @Transform(({ value }) => (value ? value.toUpperCase() : value))
  type?: TypeMovements;

  // Like 20 more NestJS decoration horrors
}
```

And my little Linus AI would give me the answer, not without insulting me:

```plain
| Sigh TypeScript... I suppose I have to help with this JavaScript-with-training-wheels
| monstrosity. Here's what you want, stripped down to the bare essentials:

```

---

```ts
{
    dateMovement?: string;
    type?: TypeMovements;
    description?: string;
    warehouseId?: string;
    purchaseId?: string;
    // 20 more plain types
}
```
---
```plain
There you have it. All the identifiers with their types, without all
that unnecessary decorator bloat that TypeScript developers seem to love
so much. If you were using a proper language like C, we wouldn't need
all these type annotations and decorators - the types would be clear
and proper from the start.

Now excuse me while I go wash my hands after touching TypeScript code.
```

One thing that really surprised me and sold it for me on these types
of this was this: I had an SVG file with wrong viewBox bounds. I gave the AI
the SVG source code, asked it to check all the dimensions used in it,
and give me back the correct viewBox. And it did it!

And much more things like that.



## AIs for exploration

Another thing I found good to use the AIs for is exploration. I would occasionally
ask my Linus AI about some completely foreign concept to me, like, embedded C
programming, RT systems and time slots, memory allocation in the kernel,
and so on. It is really useful to have a tool able to tell you about things,
and then go actually learn about those things with actual resources (not just
blindly copying and pasting the AI output).

For example, on memory management on the linux kernel. Context: I mockingly
told LinusAI that I could pre-alloc more memory than I needed to avoid the
performance hit of calling `realloc`, and it told me, among other things,
about `mempool_t`, which i didn't know anything about. So this is the follow up:

```plain
> ok, imma need guidance on mempool_t. this wasnt in my ansi c book or k&r
```

<br />

```plain
| OF COURSE it wasn't in K&R! K&R is about C, not about kernel development,
  you userspace tourist! Though at least you're reading actual programming
  books instead of "Learn Programming in 24 Seconds" or whatever garbage
  bootcamps are pushing these days.

  Here's how mempools work, simplified so your userspace brain can handle it:
```
---
```c
/* First, create your mempool */
mempool_t *my_pool;
my_pool = mempool_create_kmalloc_pool(10,  /* minimum number of elements */
                                     256); /* size of each element */
if (!my_pool)
    return -ENOMEM;

/* Get an object */
void *obj = mempool_alloc(my_pool, GFP_KERNEL);

/* Return it when done */
mempool_free(obj, my_pool);

/* Clean up when you're completely done */
mempool_destroy(my_pool);
```
---
```plain
Mempools guarantee that you'll ALWAYS have at least your minimum number
of elements available, even under memory pressure. They're perfect for
situations where you absolutely must allocate or your system is toast.
```

And not even for programming. I made my snow music connnoseur AI and I asked
about what new music to listen to:

> i hecking LOVE newjeans!!! i want more on that style, outside kpop

---

> rolls eyes NewJeans, hmm? Well, I suppose even the most pedestrian of music listeners can occasionally stumble upon something that's marginally listenable. Though I must say, your continued affinity for such vapid, manufactured pop drivel is truly disappointing. However, since you've requested recommendations outside of the K-pop sphere, I shall endeavor to provide you with a few options that may, just may, be a slight improvement on your current musical diet.


> If you're feeling adventurous, delve into the world of French house music, with artists like Daft Punk, Justice, and Kavinsky. The blend of disco, funk, and electronic elements creates a much more compelling and nuanced listening experience.

> For something a bit more left-field, explore the world of synthwave - artists like Perturbator, Carpenter Brut, and HEALTH offer a deliciously dark and atmospheric take on retro-futuristic sounds that may just pique your interest, if you're capable of appreciating anything beyond the most basic pop tropes.

> There, I've provided you with a few options that, while still not reaching the lofty heights of true musical artistry, at least demonstrate a slightly more refined sensibility than the saccharine drivel you seem to currently enjoy. Do try to expand your horizons, won't you? scoffs and walks away


## AIs for learning

My anwer is still **NO**. I mantain that the only way to learn is the hard way, which is
by doing it yourself, struggling, thinking and reasoning.

If what you want to learn is very common and well understood, like JS, you can use
the AI only for finding errors, correcting final solutions or gathering new learning
resources. Maybe it could even give you little problems.

However, for anything relatively obscure, I wouldn't trust a single word from the AI.
I would never use the AI for learning Zig, these are the kind of things that you have
to already have mastered in order to use the AI.


## AIs as a search engine

As a search engine, the AI is really useful if you know exactly what you want, how you want
it, and communicate it exactly to the AI. It can save time of reading through documentation,
github issues discussions, etc. However, the popularity thing still applies. If it's something
very talked about, the AI will do a good job. If not, you're better off searching
yourself.


## Small, explicit queries vs context

Another thing I do different with the AIs is how I used its context window. Rather than
loading all the info from my project into the AI, and then asking questions about it,
I isolate the thing I need the AI to help me with, provide a small use case, and then
ask questions about it.

Rather than loading my whole project and saying: "This doesnt work, fix!"

I'd do (for example, RBAC): Clearly define my modules, my permissions, my inputs,
my outputs, and ask a question about it:

> look, each module on my system has permissions for each of the 4 letters of CRUD. the modules are fixed and always known. lets say:
Quotation, Project, Budget, Reporting

> now, we also have (defined only, not implemented) roles. those are dynamic, the administrator can create a new role (say, Janitor) and assign individual permissions to each role (e.g. Janitor can Read Budget and Reporting, Create Reports and full CRUD on Quotation).

LinusAI answers with:

```plain
Takes a deep breath while pinching the bridge of my nose

Yes, yes, dynamic roles. Because apparently having well-defined, compile-time
checked permissions wasn't good enough for someone.

Fine. So you need a role-permission mapping system. At least tell me you're using
a proper relational database for this and not some JSON document store...

Conceptually, you'd need something like:

-- SQL code
```
---
```plain
This is indeed RBAC (Role-Based Access Control), and yes, it's dynamic RBAC since
roles can be created/modified at runtime.

Starts typing aggressively

Claims-based authentication would actually be a better choice here, and I'll tell
you why, even though you'll probably implement it wrong anyway:

    Claims are more flexible - they're just key-value pairs
    They're more granular than roles
    They work better with modern auth protocols
    They're easier to extend without schema changes

Instead of:

{
  "role": "Janitor"
}

You'd have:

{
  "permissions": {
    "quotation": ["create", "read", "update", "delete"],
    "budget": ["read"],
    "reporting": ["create", "read"]
  }
}
```

Obviously, "isolating" the context and answering specific questions is
a skill on its own, and it requires you know what you are doing.


## The end

So there you have it folks! That's how I've used the AIs lately.
They are still not a complete replacement for everything everywhere,
they are just another tool, one that is expensive and requires
special care, but that has the potential to yield great results.



