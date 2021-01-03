const { app, BrowserWindow, Menu, Tray } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const AppMenu = Menu;

let mainWindow;
let tray = null;
const iconPath = path.join(__dirname, 'assets/logo192.png');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false,
  });
  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createMenu() {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Exit',
        },
      ],
    },
    {
      label: 'Manager',
      submenu: [
        {
          label: 'Products',
        },
        {
          label: 'Companies',
        },
        {
          label: 'Customers',
        },
        {
          label: 'Providers',
        },
        {
          label: 'Others',
          submenu: [
            {
              label: 'Families',
            },
            {
              label: 'IVA',
            },
            {
              label: 'Pallets',
            },
          ],
        },
      ],
    },
    {
      label: 'Sales',
      submenu: [
        {
          label: 'Make sales',
        },
        {
          label: 'Returns on sales',
        },
        {
          label: 'Sales details',
        },
      ],
    },
    {
      label: 'Inventories',
      submenu: [
        {
          label: 'Initial inventory entry',
        },
        {
          label: 'Check stocks',
        },
      ],
    },
    {
      label: 'Purchases',
      submenu: [
        {
          label: 'Make purchases',
        },
        {
          label: 'Returns on purchases',
        },
      ],
    },
    {
      label: 'Tools',
      submenu: [
        {
          label: 'Skins',
          submenu: [
            {
              label: 'Black',
            },
            {
              label: 'White',
            },
          ],
        },
        {
          label: 'Sign off',
        },
        {
          label: 'Report designer',
        },
      ],
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Cascade',
        },
        {
          label: 'Horizontal alignment',
        },
        {
          label: 'Vertical alignment',
        },
      ],
    },
    {
      label: 'Help',
    },
  ];

  const menu = AppMenu.buildFromTemplate([]);
  AppMenu.setApplicationMenu(menu);
}

function createTray() {
  tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Settings' },
    { label: 'Help' },
    { label: 'Exit' },
  ]);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
}

app.on('ready', function () {
  createWindow();
  createMenu();
  createTray();
});
