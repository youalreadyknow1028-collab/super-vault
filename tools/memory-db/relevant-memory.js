/**
 * relevant-memory.js — Search the SQLite FTS5 memory index
 * 
 * Usage: 
 *   node relevant-memory.js "<query>"          — search with default limit (5)
 *   node relevant-memory.js "<query>" <limit>  — search with custom limit
 * 
 * Example:
 *   node relevant-memory.js "Ritchie Price submittal"
 *   node relevant-memory.js "Yorktown change order" 10
 */

const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, 'super-memory.db');

function searchMemory(query, limit = 5) {
  if (!query || query.trim().length === 0) {
    console.log('Usage: node relevant-memory.js "<query>" [limit]');
    process.exit(1);
  }

  if (!require('fs').existsSync(DB_PATH)) {
    console.log(`❌ Database not found at ${DB_PATH}`);
    console.log('Run: node rebuild-db.js first');
    process.exit(1);
  }

  const db = new Database(DB_PATH);

  // FTS5 search with porter stemming for better matching
  const stmt = db.prepare(`
    SELECT path, content, rank,
           highlight(memories, 0, '**', '**') as snippet
    FROM memories
    WHERE memories MATCH ?
    ORDER BY rank
    LIMIT ?
  `);

  const results = stmt.all(query, limit);
  db.close();

  return results;
}

// CLI mode
if (require.main === module) {
  const query = process.argv.slice(2).join(' ');
  const limit = parseInt(process.argv[3]) || 5;

  if (!query) {
    console.log('Usage: node relevant-memory.js "<query>" [limit]');
    console.log('Example: node relevant-memory.js "Ritchie Price" 5');
    process.exit(1);
  }

  const results = searchMemory(query, limit);

  console.log(`\n🔍 Search: "${query}"\n`);
  console.log(`Found ${results.length} result${results.length !== 1 ? 's' : ''}:\n`);
  console.log('─'.repeat(60));

  if (results.length === 0) {
    console.log('No results found. Try different keywords.');
    console.log('Tip: Use specific names (e.g., "Daikin" not "HVAC")');
  }

  results.forEach((r, i) => {
    console.log(`\n${i + 1}. memory/${r.path}`);
    // Show first 300 chars of snippet
    const preview = r.snippet.substring(0, 300);
    console.log(`   ${preview}${preview.length >= 300 ? '...' : ''}`);
  });

  console.log('\n' + '─'.repeat(60));
}

module.exports = { searchMemory };
