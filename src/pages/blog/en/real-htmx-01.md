---
layout: ../../../layouts/BlogLayout.astro
title: Why it might be hard to adopt htmx
description: |
    Adopting htmx is not as simple as it seems, specially if your focus is on
    development speed rather than quality.
pubDate: "2024-10-27"
tags: ["javascript", "htmx", "hyperscript", "alpine", "demo"]
image: 
    url: ""
    alt: ""
    caption: ""
---



TLDR: htmx viability is limited by its environment: hyperscript, alpine, etc.


Ever since I was evangelized by the htmx x's (formerly twitter) posts,
I wanted to use htmx on a real project. And a CRUD would be the right
chance to do so, right?

However, I found that htmx would not be so easy to adopt. These are not
htmx faults, rather, faults with the htmx ecosystem, so to speak.

These are the things that I found made it difficult to use htmx:

## Lack of a UI library like shadcn

htmx is not a UI library. However, it requires the UI to exists.
When I tried implementing my CRUDs with plain html, building the UI
was a problem. Unless I'm blind, most modern UI libraries focus either
on React or other JS frameworks. You get React code, not html+css.

So, if I want to implement a table, I have to write the html+css
from scratch. In react, I can just `npx shadcn add form` and
use it immediately. It handles responsiveness, dark-theme,
animations, etc. There is no such thing for plain HTML.

And btw, this is the motivation for one of my new side-projects,
[htmxui](https://ui.araozu.dev). I want a CLI that is able to
generate UI components like shadcn, but instead of react it's
capable of emitting code for any templating language: go temple,
rust maud, elixir HEEx, etc.


## Hyperscript is not good enough

Personally, I like the idea of hyperscript. It allows you to do
some light scripting, pairs nicely with htmx and it's DSL, once
you get used to it, is easy to use.

However, 2 things come to main as disadvantages:

- It has a DSL. It's yet another programming language to learn,
and it does't have the best way to debug errors. The average dev
can barely handle Typescript, I wonder if they could learn something
like this.

- It's not good enough for anything other than basic scripting.
For example, I build a music player for navidrome using only htmx
and hyperscript.
If every last piece of UI you will render is done on the backend,
hyperscript is good. But if you ever want to render UI exclusively
on the frontend, hyperscript stops being so useful.


### Alpine doesn't integrate as well with htmx


## Case study: my own music player.

I built a web player that consumes data from a Navidrome server.
It is written with Go+Templ, uses tailwind for styling. I wanted
to see if it was possible to build a (relatively) dynamic application.

The initial pages are all really easy to build. Rendering html
on the server without having to have a complete turing machine
that handles loading state and error states and all is so
refreshing.

![UI of my music player](/img/blog/en/htmx-01/music-player-01.jpg)

However, as soon as I began to work on the player itself, many
problems appeared.

The music must play on the client (duh), and so the music player
must be handled by client side javascript.

First, I wanted to have a mini music player. When the user clicks on
a song (1), the music player will show it's cover, title, artist, and
music controls (2).

![UI of my music player, pt2](/img/blog/en/htmx-01/music-player-02.jpg)

Hyperscript is uncapable of doing something like this, easily.
Instead, I had to write a `<script>` tag that contained a lot of
hyperscript code. It was essentialy imperative DOM manipulation via
javascript, but, instead of running `document.getElementById("title-container")` everywhere,
I could run `put 'song title' into #title-container`.

I ended up having a lot of code like this:

```ruby
def playSong(title, artist, albumId, songId)
    set #music-player-img's @src to "/covers/" + albumId
    put title into #music-player-title's innerHTML
    put artist into #music-player-artist's innerHTML

    -- Update icons
    set $playing to true
    add .hidden to #play-icon
    remove .hidden from #pause-icon

    if $sound exists
        $sound.fade($volume, 0.0, 250)
        wait 250ms
        $sound.unload()
    end

    make a Howl from {
        src: ['url/to/navidrome/'],
        html5: true,
        volume: $volume
    } called $sound
    $sound.play()
end
```

At this point, I was basically writing javascript with a fancy DSL, and some DOM
helpers. The helpers were nice, but debugging was so frustrating, especialy because
the hyperscript compiler's error messages are misleading.

This was only for playing the song. Now I had to manage the state of the player,
implement a playing queue, preload the next song seconds before it played, handle
play/pause/next/previous, etc. In the end, the hyperscript code was so large
and so unmantainable that I genuinely tought to myself "I wish I could use a
JS framework for this part".

Enter, Alpine.

### Alpine rewrite

During this experiment I found that the main thing that hyperscript can't do
is UI rendering, of any type. Part of the reason we have a million JS frameworks
is that the DOM API is verbose, prone to errors and leads to a lot of code.
The main benefit JS frameworks have on this front is **declarative UI rendering**
paired with **reactivity**.

![UI of my music player, pt3](/img/blog/en/htmx-01/music-player-03.jpg)

Being able to define once how the UI is driven from the state, and then being
able to just update the state and let the UI update itself is so helpful.
Alpine allows for this pattern, so with it I was able to rapidly build the UI,
and focus on the player state itself.

This required javascript, of course, but this time it was actual javascript,
and it didn't concern with UI, only logic and state management. And while
this is nice, it showed me another flaw with the htmx model.

See, now I'm writing javascript, a objectively bad language. And sure, there
are a million tools for making the experience better, but I'm writing
javascript inside a Go Templ template. I barely have syntax highlighting.
I have no type information, no error highlighting, anything. It's functionally
plain text.

And so, errors slip easily. Errors that can be easy to detect and correct
with the tools js has available, but can't be used inside the template
language.

So, can't you just write that javascript on it's own `.js` file, and import
it? Yeah, but now I'm breaking Locality of Behaviour, have more files to
manage and keep track of, and I have to carefully remember to import all
my js files.

But more than that, I can't store those JS files close to where the component
is defined. My project has a structure like this one:


```plain
music-player
├── public/
│   ├── css/
│   │   ╰── tailwind.css
│   ╰── img/
│       ╰── memes.webp
╰── app/
    ├── player.go
    ├── player.teml
    ├── album.go
    ╰── album.templ
```

All my static files are in a `public` folder. All my `go` and `templ` files
are on the `app` folder, I can't put static files there! (no, I won't `embed`
those into my binary)

So if I moved the js into the public folder, functionality would be split
across different folders.


## Lack of strong typing

![Meme of types](/img/blog/en/htmx-01/types-01.jpg)

Meme stolen from [Aaron Francis video: PHP doesn't suck (anymore)](https://www.youtube.com/watch?v=ZRV3pBuPxEQ).

I'm a type junkie. I want types. I need types. I need strong typing.

One thing front-end frameworks get right is that everything is strongly typed
(ignoring the fact that typescript types are pretend-types). The abstraction that the
framework provides is used, whereas htmx depends heavily on element ids and classes.

So, say I have a `<form hx-post="..." hx-target="#validation-result">` paired
with a `<div id="validation-result" />`, where all validation
errors will be shown. If at any point that id is changed, your app is silently
broken. And you have no idea why. Now refactoring is dangerous.

This is mitigated by following Locality of Behaviour, but now instead of it being
an automated, compiler enforced validation, it depends on following "best practices",
"remembering to do it right", and "hoping bugs will be catched in code review".




## ok but how does that affect my CRUD apps?

Sure, your CRUD apps don't need to be highly interactive. But, really,
any interactivity over basic transitions and string replacement, will
become a pain.

Moreover, seeing that using htmx is not as magical as Carson Gross might
sell it, teams may be tempted to stay on the thing they already use.
So, I think that for htmx to be used even more, rather than htmx itself
improving, it's ecosystem so to speak must also improve.




