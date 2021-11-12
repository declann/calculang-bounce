# calculang-example-repl-repo

There are many ways to execute the calculang compiler.

Here we have .cul.js model code in ./src and a build script in package.json which is queued to run on any commits to the repository.

So change the .cul.js code, and the compiler will update the compilations (currently also in ./src)

When I create a script to run models, we can track results in similar way.

This gives us a nice, controlled enviornment, without reinventing the wheel, using existing proven/best-practice tooling.

TODO: tidy this up (better commit messages), setup run scripts, and move to calculang org (and restart using main branch)
