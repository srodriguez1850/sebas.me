import fs from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'
import { describe, expect, it } from 'vitest'

describe('index.html <title>', () => {
  it('should contain the expected string', async () => {
    // Read the index.html file
    const indexPath = path.resolve(__dirname, '../index.html')
    const html = fs.readFileSync(indexPath, 'utf-8')

    // Create a jsdom instance
    const dom = new JSDOM(html)
    const { document } = dom.window

    // Check the <title> tag
    expect(document.title).toBe('Sebastian S. Rodriguez, Ph.D.')
  })
})