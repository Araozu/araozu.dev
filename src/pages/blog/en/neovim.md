---
layout: ../../../layouts/BlogLayout.astro
title: My neovim journey
description: |
    How did I end up using Neovim full-time?
pubDate: "2024-10-06"
tags: ["tech", "editors", "neovim", "vscode", "intellij"]
image: 
    url: "https://cdn.fourthwall.com/shops/sh_ec7a76b9-494d-45ce-94fc-960de21133c3/themes/2c4ba4ec-1347-41bf-9c5d-0759caf2c430.png"
    alt: "neovim btw"
    caption: "Image sourced from neovimbtw.com"
---

How does one end up using and loving Neovim?

## learning to code

So, in 2017 I began to learn to code at uni, using Java and Eclipse.
And I think that when one is beginning to learn, one does not think
about a lot of things. Like everyone else, I didn't know what an
editor or an IDE was. I just knew that if I pressed the "Run" button,
my Java code would run.

When learning to code, there are so many things you don't know you need.
Mostly because you can't even get the damn code to compile. And so,
once you become more and more adept while coding, you begin to realize
the deficiencies of your tools.

Eventualy I had memorized the small section of the stdlib that was
neccesary for my lessons, that Eclipse became a bottleneck.
I would type, wait for the autocomplete to show up, press enter,
and continue. I felt that "wait" lapse was bigger and bigger.

And at the time, Eclipse was also bad indexing the code. Eclipse
would not recognize some files, parse them properly, etc. Also,
eclipse is just ugly imo.


## a vi introduction

Some months later, basic Java on the bag, I took web programming,
where in 2017 we learned about the highly demanded, next revolution,
perl CGI. And some basic html, css and js ig.

But that course had the peculliarity that it required us to use `vi`.
Now, by that point I was fairly comfortable using the terminal. Stuff
like `cd`, `mv`, `mkdir`, the basics. And I knew about `nano`.
So when the professor introduced `vi`, it seemed like a weird program.
Why would we waste time to learn modes and bindings and stuff when
nano existed? And we surely were doing our "real" programming on
"real" editors elsewhere, and `scp`ing our code for deploying.
So the time spent on `ssh` was minimal.

It seemed weird, but, I learned the motions I was required to,
and moved one. Never again I would use such antiquated piece of
"technology".


## free (good) shit

I don't remember when or how (probably reddit), but somewhere 
in late 2017 I discovered about IntelliJ IDEA, and its **__FREE__**
package for students! Not being completely happy with eclipse,
I gave it a try. And I was sold (almost) immediately. Autocompletion
was flawless, it was faster than eclipse, and it looked cool imo.
It was perfect for writing my Java code.

Since I had that student bundle, I began to use JetBrains for everything.
Web programming? WebStorm. Systems programming? CLion. Game dev?
Rider. AI/data science? PyCharm. Life was good. The IDE was slow
to boot up with all the indexing, but afterwards it was (relatively)
fast. At the time (2017-2018) my PC had a core 2 duo cpu with 2gb of RAM,
half of which was dedicated to intellij.

Eventually I got an i3 6100 cpu and 8gb of ram, and all barriers
to using JetBrains were gone. I saw the rise and fall of Atom,
I tried for a little bit sublime text and visual studio code,
but found they were too basic, too barebones. They barely had syntax
highlighting, no autocomplete, build process, etc. I was sure,
nothing would take me away from JetBrains. I was ready to
pay for the commercial licence once I got a real job.


## the devil

Again, I don't remember exactly when (probably late 2022) but,
I began to try vscode again.
At the time I was obsessed with ricing. I would try new distros
and desktops environments constantly, every 6 months my SSD was clean,
and I was trying some new combo. Eventually I settled on arch btw,
but I still formatted just to change desktop environments.

I had a little script that created all my folder structure,
installed all the packages I required via `pacman`, and set up many
things. And in that process, installing my JetBrains IDEs was always
the things I dreaded the most. I had many plugins to install and set up.

At the same time, I was no longer coding as much. That last year of uni
was almost exclusively about documentation, processes, agile, papers, etc.
Code was an afterthought, what mattered was a Word document that said
that you did some code to some arbitrary standard. And I didn't do any
Java anymore. It was all web.

It must have been then that I didn't bother to use WebStorm. I wanted
something fast, to open it up and start coding, and for shorter sessions.
I began to try using VSCode. And to my surprise, it was alright.

Like, WebStorm was definitelly better, but vscode was faster, lighter,
it had less features but I didn't use the billion button on intellij anyways.
But for real programming, I would definitely still use jetbrains IDEs.
This is just a stop gap.

Then, I got into my first job. It was a PHP shop stuck in 1997, doing
live coding on the server. No version control. SQL injections everywhere.
Code was a mess. PHPStorm couldn't help. So I didn't bother. I continue to
use vscode. I used it to rewrite the sites, I used to create a new internal
system, and by that time with all the LSPs getting so much better,
there wasn't really any need for a big ol IDE. Just my editor, and
some LSPs.


## the vimagen

This time I remember how it all began. Late 2023, watching youtube while
having lunch, I was watching the amazing videos of [programmers are
also humans](https://www.youtube.com/@programmersarealsohuman5909).

Interview with Senior C++ developer. Watching as usual. But youtube
recommended to me this reaction video, from The Primeagen.
It was a funny reaction, but could also feel like this Primeagen guy
had some insight. It wasn't the standard reaction video (which I hate).

I continued to watch him, and inevitably I learned about neovim from him.
That thing I had used 6 years ago, and he was talking like it was good?
As I watched more and more, I became more and more curious.

But there was a problem.


## custom keyboards and vim motions

I had a corne keyboard at the time, with my own keyboard layout derived
from dvorak. I wanted to try vim, but I was stuck thinking that I would
have to remap all the key bindings.

See, at the time I thought of vim motions as a set of, well, finger motions,
that required the qwerty layout. So, to have a similar experience with
my custom layout, I would have to map all the keybindings.

And honestly the thing that stopped me for a long time was hjkl.
I wanted to rebind them, but I just couldn't find how. Everybody
talked about some `nmap`, or some lua script, I had no clue how
to do it.

Eventually, I left my job and found a lot of free time. So I decided
to just begin to learn the motions, as they were, however they mapped
into my custom layout. I installed the vim extensions for vscode,
and began to learn.

After a few months I was ok at it. I was still discovering new motions,
but I had all the basics mastered. I was **blazingly fast**.

And I discoverd it was true what the vimagen said. Vim motions are an
awesome way to move and edit code. I, too, don't know how there are
people out there that don't use vim motions.

But, I was still using VSCode. Using the mouse. Using a GUI. I couldn't
fully move to neovim just yet.

The next challenge with neovim the editor was to use it for more than
1 file at a time. Neovim tutor doesn't talk at all about windows, buffers,
splits, etc. So, I could only use neovim one file at a time.
When playing around it was fine, but when I wanted to work on some side
project it was a pain.



## read the friendly manual

So, 2 months ago I decided to just use neovim. I decided to read the
friendly manual, and see where things went. I read about windows
and buffers, but it was still hard to move around. That is, until
I read about Telescope.

I think telescope is the angular stone of my neovim experience.
It allowed me to move around my files, search for files,
search for strings, work with the lsp, and so many things.


And so, here I am. Now I exclusively use neovim. I use Mason for intalling
LSPs, have customized my nvim kickstart script, and wrote basic lua
to have my own keybindings.

And as time goes on, I drift away from IDEs. I now do everything on the
command line, I call the compiler directly, use git commands, etc etc.
I think neovim is the right fit for this way of doing things. But who
knows, maybe I'll find a new, better text editor in the future? (I won't
ever leave vim <sub>copium</sub>).





