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
        const isServerDown = Math.random() < 0.01;
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
 * TASK: Implement getBuildSize
 * Goal: Calculate the total build size for a given script ID.
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

async function getBuildSize(scriptId) {
  const visited = new Set();
  let totalSize = 0;

  async function walk(id) {
    if (visited.has(id)) return;
    visited.add(id);
    const info = await withRetry(() => Repository.getScriptInfo(id));
    totalSize += info.size;
    if (info.deps && info.deps.length > 0) {
      await Promise.all(info.deps.map((depId) => walk(depId)));
    }
  }
  await walk(scriptId);
  return totalSize;
}

/**
 * TEST RUNNER
 */
async function runTest() {
  const EXPECTED_SIZE = 980;
  const START_TIME = Date.now();

  console.log("Starting calculation for 'app-root'...");

  try {
    const result = await getBuildSize("app-root");
    const duration = ((Date.now() - START_TIME) / 1000).toFixed(2);

    console.log("\n--- TEST RESULTS ---");
    console.log(`Result: ${result}kb`);
    console.log(`Duration: ${duration}s`);

    if (result === EXPECTED_SIZE) {
      console.log("PASS");
    } else if (result === 1480) {
      console.log("SEMI-PASS");
    } else {
      console.log(`FAIL: Expected ${EXPECTED_SIZE}kb but got ${result}kb.`);
    }
  } catch (e) {
    console.error(`\nTEST CRASHED: ${e.message}`);
  }
}

runTest();
