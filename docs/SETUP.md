# SETUP

## Prerequisites

You will need the following **accounts**:

* GitHub
* Google

You will need the following **things properly installed** on your computer.

* [Git](https://git-scm.com/)
  * test `git --version`

* [Ember CLI](https://ember-cli.com/)
  * [Node.js](https://nodejs.org/) (with Yarn)
    * Install NVM
      * for macOS, linux use [nvm](https://github.com/creationix/nvm#install-script) 
      * for windows 
        * first remove node (if you have any)
        * use [nvm-setup](https://github.com/coreybutler/nvm-windows/releases) to install nvm
    * install node: `nvm install 8.4.0`
    * install yarn `npm i -g yarn`
  * install ember cli `yarn global add ember-cli@2.15`
  * test: `ember -v`
* [Watchman](https://facebook.github.io/watchman/docs/install.html) only on macOS, Linux
  * test: `watchman -v`

### For Windows Only 

* install ember-cli-windows `yarn global add ember-cli-windows`
* within directory of the project (as administrator) run `ember-cli-windows -D -S -H` (in CMD / PowerShell)
* exclude also nvm, node installation directories, together with yarn cache directory
  * [how to skip file from scan by windows defender}(https://answers.microsoft.com/en-us/protect/wiki/protect_defender-protect_scanning/how-to-exclude-a-filefolder-from-windows-defender/f32ee18f-a012-4f02-8611-0737570e8eee)
  * [how to exclude files & folder s from search](https://www.addictivetips.com/windows-tips/how-to-exclude-files-folders-from-cortana-search-on-windows-10/)

For more information have a look at [ember-cli-windows documentation](https://github.com/felixrieseberg/ember-cli-windows#parameters-and-configuration)