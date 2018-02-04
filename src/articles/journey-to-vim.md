---
title: 'Journey to Vim'
date: 2018-02-04
---

# Journey to Vim

So for the longest time I've always wanted to learn Vim. I spent a couple of weekends trying out Vim Adventures and
watching random Vim tutorial videos but could never quite understand and get into it. Finally I decided to bite the
bullet and commit to using Vim on the weekends, with a goal of making it my daily driver at work.

Right now I've got a basic setup which works for small projects and I'm barely scraping the surface for Vim
customizations and functionality. I've decided to write down some of the lessons I've learnt as a reminder for myself in
a couple of weeks when I forget everything and hopefully it'll help someone out there get started on their on Vim
journey.

## Getting Started

When you do a Google search for 'getting started in vim', you'll see a ton of tutorials and discussions on every aspect
of Vim, and given its flexibility, these discussions are hardly helpful for someone getting started. If you've never
done any research on Vim, I definitely suggest looking over how Vim works and its different modes. 

But if you're already up to speed, here are some of the early decisions I had to make.

### MacVim vs. Terminal Vim
You can run Vim as a standalone app in macOS or in any standard Terminal. Personally I liked the idea of being able to
SSH into any remote server and hack away so I decided to use Vim in a terminal. Whilst there are benefits of either,
it's unlikely that you'll appreciate these differences until you actually write code with Vim, so pick one and moving to
the other will be easy.

### Build your own vimrc file vs using a pre-built one
There are many pre-built Vim configuration (vimrc) files that you can just download and use. Some popular ones include
[Janus](https://github.com/carlhuda/janus) and [spf13](https://github.com/spf13/spf13-vim). There are also many wonder
people who have shared their lovingly crafted and well documented Vim configuration files. These are great resources to
learn about the many many ways you can configure Vim.

For me, I find that the best and easiest way to get started is to configure your own. Putting together your own
configuration gives you an appreciation of the hard work that goes into creating modern text editors like Sublime Text
(ST), VSCode and Atom. It also gives you a small sandbox to help practice basic text editing commands in Vim before jumping
into writing code, got to walk before you can run! Needless to say, I expect that you'll customise your .vimrc file in
Vim and not in another text editor.

### Plugins
Vim does not come with the niceties that we've come to expect in a modern text editor out of the box. Many of these
features come in the form of Plugins. But anyone who has dealt with using software packages knows the downside of having
to manage these packages, the biggest of which is the sheer number of options. It's too easy to get overwhelmed at this
step, but I took a practical approach to Plugins.

### Key Bindings
One of Vim's most attractive features is its mouseless approach, having key combinations to for everything you could
possibly do in the editor and more. There's almost an expectation for every Vim user to customise every single key bind
to suit their individual needs, and while Vim is certainly capable of letting you do that, it is by no means necessary.
I've taken a customize-only-when-the-need-arises and sensible-defaults approach to this.

## Diving into it
So I'm going to share my approach so far with Vim. I've been using Sublime Text (ST) for the past 5 years so that's provided
me with a benchmark of productivity looks like. My goal is just to hotswap Vim for Sublime at some point in the future.

### Step 1 - List down important features in your current editor that you cannot live without
You probably aren't using every single feature available in your current editor, so configuring Vim for parity with what
you're used to won't be too difficult. The goal is to pick out the minimal number of features to get you comfortable. Here are some of mine:

- **Folder/File browser** - for navigating my project files
- **Syntax highlighting**
- **Fuzzy Path Finding** - for quickly navigating to files. In ST, typing CMD+T opens a file finder that makes
  navigating to a specific file a breeze.
- **Plugin Management** - ST's Package Control makes adding new packages really simple, in Vim it's even more crucial.

### Step 2 - Pick a Plugin Manager
There are several good options out there, but again you won't be able to tell which is better until you actually use
them. Some common ones include [Pathogen](https://github.com/tpope/vim-pathogen) and 
[Vundle](https://github.com/VundleVim/Vundle.vim) but personally I use [vim-plug](https://github.com/junegunn/vim-plug).

### Step 3 - Do some research on common plugins for the features you listed in Step 1
You can't run away from spending hours upon hours researching and customizing Vim, but that's half the fun. For me, I
used the following:

- **Folder/File browser** - [NerdTree](https://github.com/scrooloose/nerdtree)
- **Syntax highlighting** - [Syntastic](https://github.com/vim-syntastic/syntastic)
- **Fuzzy Path Finding** - [CtrlP](https://github.com/ctrlpvim/ctrlp.vim)
- **Plugin Management** - Vim Plug (linked above)

### Step 4 - Customise your Plugins based on what you're used to
You're (hopefully) already using keyboard shortcuts daily in your preferred text editor. A good starting point will be
to map your most commonly used shortcuts to the plugin's features. For example, here are some of mine:

- **NerdTree**
```
// <Ctrl> + k + b to pull out the sidebar, same as ST
nmap <C-k><C-b> :NERDTreeToggle<CR>
```

- **CtrlP**
```
// <Ctrl> + t to pull up the menu
nmap <C-t> :CtrlP<CR>
```

Hopefully this helps you get started with your own Vim adventures. I've barely started my own journey, but I'm excited
at the progress and possibilities ahead. I've also linked my .vimrc file, please feel free to reference any settings
that make sense for you. I hope to spend more time with Vim and report back with new and exciting things.


