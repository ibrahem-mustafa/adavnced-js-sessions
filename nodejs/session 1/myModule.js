const c = console
const LogError = (msg) => c.error(msg)
const LogWarn = (msg) => c.warn(msg)
const Log = (msg) => c.log(msg)

const toExport = {
  LogError,
  LogWarn,
  Log
}

module.exports = toExport