### [Beech Design](http://sandbox.whitemyer.com/beech-testing/)

## Initialising
Run these commands in the terminal.
To run terminal commands, select `Terminal` from the top menu, and click `New Terminal`.
The terminal will appear below the code panel.


### `npm install`
* Installs the required dependencies and scripts.

### `npm start`
* Starts the development server for previewing changes.

## Commiting to GitHub
(Note: you MUST commit and push to Git before you can push to FTP.)

* In the terminal: `npm run build`. This will build the app for production.
* Click the Git icon. The icon is the one that looks like a two-pronged fork on the left-most button panel.
* Verify that your changed files are listed under `CHANGES`
* Click the `+` icon on the `CHANGES` line to add the files for commit.
* Add a Commit message in the field.
* Click `Commit` under the Commit message field.

> ### Tip: Make sure you run `npm run build` before each commit!
>
> If you don't, the source code will have your changes, but the live site will not change
> because it wasn't built from the source. React apps can't be deployed as-is - they MUST
> be built/compiled.

## Pushing to GitHub

* In the terminal:
* `git add *`
* `git push`

> ### Tip: What's the difference between a commit and push?
>
> A `commit` is a representation of a change that was made. In some cases it makes sense to make multiple commits before pushing.
> The change is documented on Git, but not added to the repository (project). If someone pulls the repo,
> your changes will not be reflected.
>
> A `push` will copy all of your (committed) local changes to GitHub. If someone pulls the repo, your changes will be there.

## Pushing live to FTP

* In the terminal:
* `git config git-ftp.url "ftp://ftp.whitemyer.com/clients/whitemyersites/whitemyer/docs/sandbox/beech-testing"`
* `git config git-ftp.user "YOUR_FTP_USERNAME"`
* `git config git-ftp.password "YOUR_FTP_PASSWORD"`
* `git ftp push --syncroot build`

> ### Tip: That's a lot of commands!
>
> You only have to run the `git config` commands once per session. However, make sure you
> build, commit, and push before running `git ftp-push`.

> ### Tip: I get a "Dirty repository" error
>
> You have Git changes that are not reflected on GitHub. Commit and Push to Github.

## Done!
The project with your changes are now documented, backed up by Git in the cloud, and live online.