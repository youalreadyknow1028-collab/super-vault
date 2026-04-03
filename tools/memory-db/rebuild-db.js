/**
 * rebuild-db.js — Rebuild the SQLite FTS5 memory index
 * Run this after any significant changes to memory/ files
 * 
 * Usage: node rebuild-db.js
 */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const DB_PATH = path.join(__dirname, 'super-memory.db');
// Index the memory/ directory relative to workspace root
const MEMORY_GLOB = '../../memory/**/*.md';

function rebuildDatabase() {
  console.log('🧠 Rebuilding Supervisor memory index...\n');

  // Remove old DB
  if (fs.existsSync(DB_PATH)) {
    fs.unlinkSync(DB_PATH);
    console.log('Removed old database.');
  }

  const db = new Database(DB_PATH);

  // Create FTS5 virtual table with porter stemming
  db.exec(`
    CREATE VIRTUAL TABLE memories USING fts5(
      path,
      content,
      tokenize='porter'
    )
  `);

  // Find all markdown files in memory/
  const memoryDir = path.join(__dirname, '..', '..', 'memory');
  const pattern = path.join(memoryDir, '**', '*.md');
  const files = glob.sync(pattern, { nodir: true });

  console.log(`Found ${files.length} memory files to index:\n`);

  const insert = db.prepare('INSERT INTO memories (path, content) VALUES (?, ?)');
  const insertMany = db.transaction((files) => {
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8');
      // Store path relative to memory/ directory
      const relativePath = path.relative(memoryDir, file);
      insert.run(relativePath, content);
      console.log(`  ✓ ${relativePath}`);
    }
  });

  insertMany(files);

  db.close();

  console.log(`\n✅ Memory index rebuilt successfully!`);
  console.log(`   ${files.length} files indexed`);
  console.log(`   Database: ${DB_PATH}`);
}

if (require.main === module) {
  rebuildDatabase();
}

module.exports = { rebuildDatabase };
