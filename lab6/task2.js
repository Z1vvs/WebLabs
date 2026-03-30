/**
 * REPOSITORY SIMULATOR
 */
const Repository = (function () {
  const _db = {
    "app-root": {
      id: "app-root",
      size: 100,
      content: "111",
      deps: ["auth-mod", "ui-lib"],
    },
    "auth-mod": {
      id: "auth-mod",
      size: 50,
      content: "222",
      deps: ["crypto-utils"],
    },
    "ui-lib": {
      id: "ui-lib",
      size: 200,
      content: "333",
      deps: ["icon-set", "canvas-api"],
    },
    "crypto-utils": {
      id: "crypto-utils",
      size: 30,
      content: "444",
      deps: ["wasm-core"],
    },
    "canvas-api": {
      id: "canvas-api",
      size: 80,
      content: "555",
      deps: ["wasm-core"],
    },
    "icon-set": { id: "icon-set", size: 20, content: "666", deps: [] },
    "wasm-core": { id: "wasm-core", size: 500, content: "777", deps: [] },
  };

  return {
    getScriptInfo: (id) =>
      new Promise((resolve, reject) => {
        console.log(`API Request: ${id}`);
        const isServerDown = Math.random() < 0.5;
        setTimeout(
          () => {
            if (isServerDown) return reject(new Error("Server is unavailable"));
            _db[id]
              ? resolve(_db[id])
              : reject(new Error(`Script ${id} not found.`));
          },
          1000 + Math.random() * 3000,
        );
      }),
  };
})();

/**
 * TASK: Implement loadScripts
 * Goal: Return a flat array of unique objects for every script in the dependency tree.
 */
async function withRetry(fn, retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      const backoff = delay * Math.pow(2, i);
      const jitter = Math.random() * 100;
      await new Promise((resolve) => setTimeout(resolve, backoff + jitter));
    }
  }
}

async function loadScripts(ids) {
  const scripts = new Map();
  const visited = new Set();

  async function walk(id) {
    if (visited.has(id)) return;
    visited.add(id);
    const info = await withRetry(() => Repository.getScriptInfo(id));
    scripts.set(id, { id: info.id, content: info.content });
    if (info.deps && info.deps.length > 0) {
      await Promise.all(info.deps.map((depId) => walk(depId)));
    }
  }
  await Promise.all(ids.map((id) => walk(id)));
  return Array.from(scripts.values());
}

/**
 * TEST RUNNER
 */
async function runTest() {
  const START_TIME = Date.now();

  console.log("Starting calculation...");

  try {
    const result = await loadScripts(["auth-mod", "icon-set"]);
    const duration = ((Date.now() - START_TIME) / 1000).toFixed(2);

    console.log("\n--- TEST RESULTS ---");
    console.log(`Retrieved Scripts:`);
    result.forEach((s) => console.log(` - [${s.id}]: "${s.content}"`));
    console.log(`\nTotal scripts loaded: ${result.length}`);
    console.log(`Duration: ${duration}s`);
  } catch (e) {
    console.error(`TEST CRASHED: ${e.message}`);
  }
}

runTest();
