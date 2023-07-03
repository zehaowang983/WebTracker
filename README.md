[中文README](./README.zh.md)

A web browser extenstion based on [BetterOneTab](https://github.com/cnwangjie/better-onetab/blob/master/README.md)

### Features

Send a feature request.

 - [x] Basic feature of OneTab
 - [x] Popup page with simple list
 - [x] Pin tab list
 - [x] Keyboard shortcuts
 - [x] Options
 - [x] Drag and drop re-ordering
 - [x] Data & Options sync
 - [x] Import & Export
 - [x] Add stored tabs to history
 - [x] I18N support (only English & Chinese currently)

### Installation

Install from Google Extension Store

Download the released .crx file in releases page and drag it to chrome extensions page.

### Development

0. Clone this repo
0. Install dependencies (use `yarn` command)
0. Auto reload (use `yarn dev` command)
0. Go to Google Extension Store in Developer Mode Click LOAD UNPACKED button and select ./dist path
0. Build (use `yarn build` command)

- UI: Vue.js (see src/app)
- Backend: Node.js (see src/common)
- Database: MongoDB (see data/)
- CI/CD: Docker + CircleCI

### License

MIT LICENSE
