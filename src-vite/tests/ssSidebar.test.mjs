import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { computed, ref } from 'vue';
import ts from 'typescript';

const read = path => readFile(new URL(path, import.meta.url), 'utf8');
const home = await read('../src/views/Home.vue');
const constants = await read('../src/common/constants.ts');
const SIDEBAR = new Function(ts.transpile(constants.replaceAll('export ', '')) + '; return SIDEBAR;')();
const compile = code => ts.transpile(code, { target: ts.ScriptTarget.ES2022 });

test('Shimasu opens in an empty library, toggles, and returns to Albums', () => {
  const config = { main: { sidebarIndex: SIDEBAR.ALBUM } };
  const libConfig = { activePane: 'collection' };
  const showPanel = ref(false);
  const databaseCorrupted = ref(false);
  const libraryEmpty = ref(true);
  const start = home.indexOf('function clickSidebar(');
  const code = home.slice(start, home.indexOf('// Dragging the splitter', start));
  const click = new Function('config', 'libConfig', 'showPanel', 'databaseCorrupted', 'libraryEmpty', 'SIDEBAR',
    compile(code) + '; return clickSidebar;')(
    config, libConfig, showPanel, databaseCorrupted, libraryEmpty, SIDEBAR,
  );
  const buttons = ref(Object.values(SIDEBAR).map(index => ({ index })));
  const visibleStart = home.indexOf('const visibleButtons =');
  const visibleCode = home.slice(visibleStart, home.indexOf('\nwatch(', visibleStart));
  const visible = new Function('computed', 'buttons', 'libraryEmpty', 'SIDEBAR',
    compile(visibleCode) + '; return visibleButtons;')(computed, buttons, libraryEmpty, SIDEBAR);
  assert.equal(visible.value.find(item => item.index === SIDEBAR.SHIMASU).disabled, false);
  assert.equal(visible.value.find(item => item.index === SIDEBAR.SEARCH).disabled, true);
  click(SIDEBAR.SHIMASU);
  assert.equal(config.main.sidebarIndex, SIDEBAR.SHIMASU);
  assert.equal(libConfig.activePane, 'main');
  assert.equal(showPanel.value, true);
  click(SIDEBAR.SHIMASU);
  assert.equal(showPanel.value, false);
  click(SIDEBAR.ALBUM);
  assert.equal(config.main.sidebarIndex, SIDEBAR.ALBUM);
  assert.equal(showPanel.value, true);
  click(SIDEBAR.SEARCH);
  assert.equal(config.main.sidebarIndex, SIDEBAR.ALBUM);
  databaseCorrupted.value = true;
  click(SIDEBAR.SHIMASU);
  assert.equal(config.main.sidebarIndex, SIDEBAR.ALBUM);
});

test('empty-library refresh keeps the selected Shimasu panel', async () => {
  const config = { main: { sidebarIndex: SIDEBAR.SHIMASU } };
  const start = home.indexOf('const checkLibraryEmpty =');
  const code = home.slice(start, home.indexOf('const SETTINGS_BASE_WIDTH', start));
  const check = new Function('config', 'databaseCorrupted', 'libraryEmpty', 'SIDEBAR', 'invoke',
    compile(code) + '; return checkLibraryEmpty;')(
    config, ref(false), ref(false), SIDEBAR,
    async cmd => cmd === 'is_database_corrupted' ? false : [],
  );
  await check();
  assert.equal(config.main.sidebarIndex, SIDEBAR.SHIMASU);
  config.main.sidebarIndex = SIDEBAR.SEARCH;
  await check();
  assert.equal(config.main.sidebarIndex, SIDEBAR.ALBUM);
});

test('SS has an isolated identity and cannot check for upstream updates', async () => {
  const config = JSON.parse(await read('../../src-tauri/tauri.conf.json'));
  assert.equal(config.productName, 'SS');
  assert.equal(config.identifier, 'com.xfhg.ss');
  assert.equal(config.mainBinaryName, 'SS');
  assert.equal(config.bundle.createUpdaterArtifacts, false);
  assert.deepEqual(config.plugins.updater.endpoints, []);
  const updater = await read('../src/common/updater.ts');
  const start = updater.indexOf('  async function checkForUpdates(');
  const code = updater.slice(start, updater.indexOf('  async function installAvailableUpdate(', start));
  // No updater state or IPC is supplied: disabled checks must return before using either.
  const check = new Function('updatesEnabled', compile(code) + '; return checkForUpdates;')(false);
  await check();
  await check(true);
});
