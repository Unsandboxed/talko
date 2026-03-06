const Base64Util = require('./base64-util');
const Cast = require('./cast');
const Clone = require('./clone');
const Color = require('./color');
const { fetchWithTimeout } = require('./fetch-with-timeout');
const getMonitorID = require('./get-monitor-id');
const JSONRPC = require('./get-monitor-id');
const log = require('./log');
const MathUtil = require('./math-util');
const maybeFormatMessage = require('./maybe-format-message');
const newBlockIDs = require('./new-block-ids');
const RateLimiter = require('./rateLimiter');
const ScratchLinkWebsocket = require('./scratch-link-websocket');
const StringUtil = require('./string-util');
const taskQueue = require('./task-queue');
const Timer = require('./timer');
const AssetUtil = require('./tw-asset-util');
const StaticFetch = require('./tw-static-fetch');
const uid = require('./uid');
const VariableUtil = require('./variable-util');
const xmlEscape = require('./xml-escape');

const Util = {
  Base64Util,
  Cast,
  Clone,
  Color,
  fetchWithTimeout,
  getMonitorID,
  JSONRPC,
  log,
  MathUtil,
  maybeFormatMessage,
  newBlockIDs,
  RateLimiter,
  ScratchLinkWebsocket,
  StringUtil,
  taskQueue,
  Timer,
  AssetUtil,
  StaticFetch,
  uid,
  VariableUtil,
  xmlEscape
};

module.exports = Util;
