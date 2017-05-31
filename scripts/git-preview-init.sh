# https://coderwall.com/p/fasnya/add-git-branch-name-to-bash-prompt
# This will enable the current branch name of a git repo to be display in the terminal prompt
# Simply copy or invoke this script on start-up (e.g. .bash_profile)

parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\h \[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ "
