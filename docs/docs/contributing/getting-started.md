---
sidebar_position: 2
---

# Getting Started

Follow these steps in order to get started with contributing to Oyster!

1. Install [Docker Desktop](https://docs.docker.com/engine/install). After it's
   installed, start the application!

2. Install [Node.js](https://nodejs.org/en/download/package-manager) (v20.x).

   1. [Optional] Our recommendation is to use [`nvm`](https://nvm.sh) to install
      Node. The main benefit of `nvm` is that it allows you to quickly install
      and use different versions of Node on your machine.
   2. [Optional] If you choose to install Node.js with `nvm`, we would also
      recommend setting up a
      [shell integration](https://github.com/nvm-sh/nvm/blob/master/README.md#deeper-shell-integration),
      which will automatically install the right Node version for any project
      that you're working in, as long as there is a
      [`.nvmrc`](https://github.com/colorstackorg/oyster/blob/main/.nvmrc) file
      found in that directory.
   3. [Optional] If you choose to install Node.js with `nvm` but don't want to
      set up a shell integration, you can switch to the appropriate Node version
      manually by doing:

      ```sh
      nvm install && nvm use
      ```

3. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) (v1).

   ```
   npm install --global yarn
   ```

4. [Fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
   to your own GitHub account.

5. [Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   to your local machine.

   ```
   git clone https://github.com/<YOUR_USERNAME>/oyster.git
   ```

6. Open the project in the editor of your choice and install all of our
   [Recommend Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions).
   You should see a popup to do this in VSCode the first time you open the
   project!

7. [Configure the upstream repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork),
   which will help you with
   [syncing your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)
   with the Oyster codebase as new code is added to it in the future.

   ```
   git remote add upstream https://github.com/colorstackorg/oyster.git
   ```

8. If you're not on macOS M1/M2/M3, please skip this step! If you are, you'll
   need to install some native dependencies on your machine in order to support
   [`node-canvas`](https://www.npmjs.com/package/canvas), which is the library
   we need in order to convert PDFs to PNGs in our _AI Resume Review_ feature:

   ```sh
   brew install pkg-config cairo pango
   ```

9. Install all project dependencies:

   ```sh
   yarn
   ```

10. Set up your environment variables:

    ```
     yarn env:setup
    ```

    You'll now have `.env` files in all of your apps (and a couple packages)!

    You'll also notice that a lot of environment variables are empty. Most of
    these empty variables are tied to the 3rd party integrations we have with
    services such as Google for authentication. You shouldn't need to enable
    these integrations unless you're working on a feature that touches that
    service, but in case you need to enable an integration, please see the
    [How to Enable Integrations](./how-to-enable-integrations.md) documentation.

11. Start your Postgres database and Redis store:

    ```
    yarn dx:up
    ```

12. Run all the database migrations:

    ```sh
    yarn db:migrate
    ```

13. Seed your database with some "dummy" data:

    ```sh
    yarn db:seed
    ```

    Be sure to follow the prompt to add your email to the database.

    This will enable you to log into both the Admin Dashboard and Member Profile
    very soon!

14. Build the project:

    ```sh
    yarn build
    ```

15. Start all of the applications in development:

    ```sh
    yarn dev:apps
    ```

16. Open up the applications in the browser.

    1. The Member Profile is running at http://localhost:3000.
    2. The Admin Dashboard is running at http://localhost:3001.

17. Log into both applications. In the development environment, you can bypass
    the "real" authentication by doing the following:

    1. Click "Log In with OTP".
    2. Input the email that you seeded your database with.
    3. Input any 6-digit value (ie: 000000).

    You should be logged in!

18. Set up [Prisma Studio](https://www.prisma.io/studio), a tool to make it
    easier to interact with and manage your data in the browser:

    ```sh
    yarn prisma:setup # Generates a Prisma schema file...
    yarn prisma:studio # Starts Prisma Studio locally...
    ```

    You can now open up Prisma Studio in your browser at http://localhost:5555.

19. [Optional] Once you are done developing, you may want to stop the database
    containers since they can eat up battery life.

    ```sh
    yarn dx:down
    ```

That's it -- you've finished setting up Oyster locally! All your applications
are running properly and you're ready to get your first contribution in!
