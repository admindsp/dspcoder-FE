## Local Project Setup

- Install Node v21.7.3 (https://nodejs.org/en/download) (See guide for setting up in windows/linux/macosx)
- Install PNPM 8.15.7 (https://pnpm.io/installation) `npm install -g pnpm`
- Install Python 3.12.3 (https://www.python.org/downloads/)
- Verify if pip has been installed and it is pip > 24.0. if not install or upgrade it. (https://pip.pypa.io/en/stable/installation/)
- Open repository root folder. You can see a package.json file there. Open a TERMINAL here and enter the following command. `pnpm install`
- Open repository root folder. Go inside server directory. You can see a requirements.txt file there. Open TERMINAL in this directory and write the following command: `pip install -r requirements.txt or pip3 install -r requirements.txt`
- create/update a ".env" file in root dir and server/problem_management_service dir and set parameters for connections
  (there is a sample .env.sample file where actually parameters need to be set)
- Go back to root folder, type the following command: `pnpm run dev`

## TO-DO:
1. Problems page



