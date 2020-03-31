#!/usr/bin/env node
const { createInterface } = require('readline')
const { createReadStream } = require('fs')

const processArguments = () => {
  const args = process.argv.slice(2)

  const options = {
    printLineNumbers: false,
    printFileNames: false,
    caseInsensitive: false,
    invert: false,
    matchLine: false,
    hasMultipleFiles: false,
  }

  let flags = []
  let pattern = ''
  let files = []

  for (const arg of args) {
    if (arg.startsWith('-')) {
      flags.push(arg)
    } else {
      if (!pattern) pattern = arg
      else files.push(arg)
    }
  }

  if (!pattern) throw new Error('Invalid arguments, no pattern provided')
  if (files.length < 1) throw new Error('Invalid arguments, no files provided')

  if (files.length > 1) options.hasMultipleFiles = true
  for (const flag of flags) {
    switch (flag) {
      case '-n':
        options.printLineNumbers = true
        break
      case '-l':
        options.printFileNames = true
        break
      case '-i':
        options.caseInsensitive = true
        break
      case '-v':
        options.invert = true
        break
      case '-x':
        options.matchLine = true
        break
      default:
        throw new Error('Invalid arguments, unrecognized flag provided:' + flag)
    }
  }

  return { options, pattern, files }
}

const processLine = (line, lineNumber, pattern, file, options) => {

  const [usedLine, usedPattern] = options.caseInsensitive
    ? [line.toLowerCase(), pattern.toLowerCase()]
    : [line, pattern]

  let isMatch = options.matchLine
    ? usedLine === usedPattern
    : usedLine.indexOf(usedPattern) !== -1

  if (options.invert) isMatch = !isMatch

  if (!isMatch) return

  if (options.printFileNames) return file
  if (options.printLineNumbers) return `${(options.hasMultipleFiles && (file + ':')) || ''}${lineNumber}:${line}`
  return `${(options.hasMultipleFiles && (file + ':')) || ''}${line}`
}

const main = async () => {
  const { options, pattern, files } = processArguments()
  const output = []

  for (const file of files) {
    await new Promise(resolve => {
      const stream = createInterface({
        input: createReadStream(file),
        output: process.stdout,
        console: false,
      })

      let lineNumber = 1
      stream.on('line', line => {
        const processedLine = processLine(line, lineNumber++, pattern, file, options)
        if (processedLine) {
          if (!options.printFileNames || output.indexOf(processedLine) === -1) {
            output.push(processedLine)
          }
        }
      })
      stream.on('close', resolve)
    })

  }

  console.log(output.join('\n'))
}

main()
